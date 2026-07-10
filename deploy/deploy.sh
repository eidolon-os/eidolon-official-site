#!/usr/bin/env bash
set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

SITE_URL="${SITE_URL:-https://eidolon.aimanthor.com/}"
REMOTE_HOST="${REMOTE_HOST:-root@eidolon}"
REMOTE_BASE="${REMOTE_BASE:-/var/www/eidolon-official-site}"
REMOTE_RELEASES_DIR="${REMOTE_BASE}/releases"
REMOTE_CURRENT_LINK="${REMOTE_BASE}/current"
REMOTE_NGINX_CONF="${REMOTE_NGINX_CONF:-/etc/nginx/conf.d/eidolon-official-site.conf}"
DOMAIN="${DOMAIN:-eidolon.aimanthor.com}"
STATIC_OUT_DIR="${STATIC_OUT_DIR:-deploy/.static}"
LOCAL_SSL_CERT_DIR="${LOCAL_SSL_CERT_DIR:-/Users/manson/tmp/19525696_aimanthor.com_nginx}"
LOCAL_SSL_CERT_PATH="${LOCAL_SSL_CERT_PATH:-${LOCAL_SSL_CERT_DIR}/aimanthor.com.pem}"
LOCAL_SSL_KEY_PATH="${LOCAL_SSL_KEY_PATH:-${LOCAL_SSL_CERT_DIR}/aimanthor.com.key}"
SSL_CERT_DIR="${SSL_CERT_DIR:-/etc/nginx/ssl/aimanthor.com}"
SSL_CERT_PATH="${SSL_CERT_PATH:-${SSL_CERT_DIR}/aimanthor.com.pem}"
SSL_KEY_PATH="${SSL_KEY_PATH:-${SSL_CERT_DIR}/aimanthor.com.key}"
CONFIGURE_NGINX=0
INSTALL_SSL=0
SKIP_TESTS=0
BUILD_ONLY=0

usage() {
  cat <<EOF
Usage:
  deploy/deploy.sh [--configure-nginx] [--install-ssl] [--skip-tests] [--build-only]

Deploy the current Eidolon official site as a static nginx site.

Environment:
  SITE_URL             Public URL used in generated metadata. Default: ${SITE_URL}
  DOMAIN               nginx server_name. Default: ${DOMAIN}
  REMOTE_HOST          SSH target. Default: ${REMOTE_HOST}
  REMOTE_BASE          Remote deploy base. Default: ${REMOTE_BASE}
  REMOTE_NGINX_CONF    Remote nginx conf path. Default: ${REMOTE_NGINX_CONF}
  STATIC_OUT_DIR       Local generated static dir. Default: ${STATIC_OUT_DIR}
  LOCAL_SSL_CERT_PATH  Local TLS certificate chain. Default: ${LOCAL_SSL_CERT_PATH}
  LOCAL_SSL_KEY_PATH   Local TLS private key. Default: ${LOCAL_SSL_KEY_PATH}
  SSL_CERT_PATH        Remote TLS certificate chain. Default: ${SSL_CERT_PATH}
  SSL_KEY_PATH         Remote TLS private key. Default: ${SSL_KEY_PATH}

Examples:
  deploy/deploy.sh --configure-nginx --install-ssl
  REMOTE_BASE=/var/www/eidolon-official-site deploy/deploy.sh --configure-nginx
  deploy/deploy.sh --build-only
  deploy/deploy.sh
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --configure-nginx)
      CONFIGURE_NGINX=1
      shift
      ;;
    --install-ssl)
      INSTALL_SSL=1
      shift
      ;;
    --skip-tests)
      SKIP_TESTS=1
      shift
      ;;
    --build-only)
      BUILD_ONLY=1
      shift
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

need_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

need_command npm
need_command node
need_command rsync
need_command ssh
if [[ "$INSTALL_SSL" -eq 1 ]]; then
  need_command openssl
fi

validate_ssl_files() {
  if [[ ! -r "$LOCAL_SSL_CERT_PATH" ]]; then
    echo "Local TLS certificate is missing or unreadable: ${LOCAL_SSL_CERT_PATH}" >&2
    exit 1
  fi

  if [[ ! -r "$LOCAL_SSL_KEY_PATH" ]]; then
    echo "Local TLS private key is missing or unreadable: ${LOCAL_SSL_KEY_PATH}" >&2
    exit 1
  fi

  local cert_pubkey key_pubkey
  cert_pubkey="$(openssl x509 -in "$LOCAL_SSL_CERT_PATH" -pubkey -noout | openssl sha256)"
  key_pubkey="$(openssl pkey -in "$LOCAL_SSL_KEY_PATH" -pubout | openssl sha256)"

  if [[ "$cert_pubkey" != "$key_pubkey" ]]; then
    echo "TLS certificate and private key do not match." >&2
    exit 1
  fi
}

cd "$ROOT_DIR"

if [[ "$SKIP_TESTS" -eq 1 ]]; then
  npm run build
else
  npm test
fi

SITE_URL="$SITE_URL" STATIC_OUT_DIR="$STATIC_OUT_DIR" node deploy/render-static.mjs

if [[ ! -f "$STATIC_OUT_DIR/index.html" ]]; then
  echo "Static artifact is missing index.html: $STATIC_OUT_DIR" >&2
  exit 1
fi

if [[ "$BUILD_ONLY" -eq 1 ]]; then
  echo "Build-only mode complete. Static artifact is ready at ${STATIC_OUT_DIR}."
  exit 0
fi

if [[ "$INSTALL_SSL" -eq 1 ]]; then
  validate_ssl_files
fi

RELEASE_ID="$(date -u +%Y%m%dT%H%M%SZ)-$(git rev-parse --short HEAD)"
REMOTE_RELEASE_DIR="${REMOTE_RELEASES_DIR}/${RELEASE_ID}"

echo "Creating remote release ${REMOTE_RELEASE_DIR}"
ssh "$REMOTE_HOST" "mkdir -p '$REMOTE_RELEASE_DIR' '$REMOTE_RELEASES_DIR'"

rsync -az --delete "${STATIC_OUT_DIR}/" "${REMOTE_HOST}:${REMOTE_RELEASE_DIR}/"

ssh "$REMOTE_HOST" "ln -sfn '$REMOTE_RELEASE_DIR' '$REMOTE_CURRENT_LINK'"

if [[ "$INSTALL_SSL" -eq 1 ]]; then
  echo "Installing TLS certificate to ${SSL_CERT_DIR}"
  ssh "$REMOTE_HOST" "install -d -m 755 '$SSL_CERT_DIR'"
  ssh "$REMOTE_HOST" "umask 022; cat > '${SSL_CERT_PATH}.tmp'" < "$LOCAL_SSL_CERT_PATH"
  ssh "$REMOTE_HOST" "umask 077; cat > '${SSL_KEY_PATH}.tmp'" < "$LOCAL_SSL_KEY_PATH"
  ssh "$REMOTE_HOST" "chmod 644 '${SSL_CERT_PATH}.tmp' && chmod 600 '${SSL_KEY_PATH}.tmp' && mv '${SSL_CERT_PATH}.tmp' '$SSL_CERT_PATH' && mv '${SSL_KEY_PATH}.tmp' '$SSL_KEY_PATH' && chown root:root '$SSL_CERT_PATH' '$SSL_KEY_PATH'"
fi

if [[ "$CONFIGURE_NGINX" -eq 1 ]]; then
  if [[ "$INSTALL_SSL" -ne 1 ]]; then
    ssh "$REMOTE_HOST" "test -r '$SSL_CERT_PATH' && test -r '$SSL_KEY_PATH'" || {
      echo "Remote TLS certificate/key not found. Run with --install-ssl or set SSL_CERT_PATH/SSL_KEY_PATH." >&2
      exit 1
    }
  fi

  echo "Installing nginx config ${REMOTE_NGINX_CONF}"
  ssh "$REMOTE_HOST" "cat > '$REMOTE_NGINX_CONF' <<'NGINX_EOF'
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN};

    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name ${DOMAIN};

    ssl_certificate ${SSL_CERT_PATH};
    ssl_certificate_key ${SSL_KEY_PATH};
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:EIDOLONSSL:10m;
    ssl_session_timeout 1d;

    root ${REMOTE_CURRENT_LINK};
    index index.html;

    access_log /var/log/nginx/eidolon-official-site.access.log;
    error_log  /var/log/nginx/eidolon-official-site.error.log;

    location /assets/ {
        try_files \$uri =404;
        add_header Cache-Control \"public, max-age=31536000, immutable\";
    }

    location /brand/ {
        try_files \$uri =404;
        add_header Cache-Control \"no-store, no-cache, must-revalidate\" always;
        add_header Pragma \"no-cache\" always;
        add_header Expires \"0\" always;
    }

    location = /og.png {
        try_files \$uri =404;
        add_header Cache-Control \"no-store, no-cache, must-revalidate\" always;
        add_header Pragma \"no-cache\" always;
        add_header Expires \"0\" always;
    }

    location = /favicon.svg {
        try_files \$uri =404;
        add_header Cache-Control \"no-store, no-cache, must-revalidate\" always;
        add_header Pragma \"no-cache\" always;
        add_header Expires \"0\" always;
    }

    location / {
        try_files \$uri \$uri/ /index.html;
        add_header Cache-Control \"no-store, no-cache, must-revalidate\" always;
        add_header Pragma \"no-cache\" always;
        add_header Expires \"0\" always;
    }
}
NGINX_EOF
nginx -t
systemctl reload nginx"
else
  echo "Skipped nginx config. Run with --configure-nginx for first-time setup."
fi

echo "Deployed ${RELEASE_ID} to ${SITE_URL}"
