#!/usr/bin/env bash
set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

SITE_URL="${SITE_URL:-http://eidolon.aimanthor.com/}"
REMOTE_HOST="${REMOTE_HOST:-root@eidolon}"
REMOTE_BASE="${REMOTE_BASE:-/var/www/eidolon-official-site}"
REMOTE_RELEASES_DIR="${REMOTE_BASE}/releases"
REMOTE_CURRENT_LINK="${REMOTE_BASE}/current"
REMOTE_NGINX_CONF="${REMOTE_NGINX_CONF:-/etc/nginx/conf.d/eidolon-official-site.conf}"
DOMAIN="${DOMAIN:-eidolon.aimanthor.com}"
STATIC_OUT_DIR="${STATIC_OUT_DIR:-deploy/.static}"
CONFIGURE_NGINX=0
SKIP_TESTS=0
BUILD_ONLY=0

usage() {
  cat <<EOF
Usage:
  deploy/deploy.sh [--configure-nginx] [--skip-tests] [--build-only]

Deploy the current Eidolon official site as a static nginx site.

Environment:
  SITE_URL           Public URL used in generated metadata. Default: ${SITE_URL}
  DOMAIN             nginx server_name. Default: ${DOMAIN}
  REMOTE_HOST        SSH target. Default: ${REMOTE_HOST}
  REMOTE_BASE        Remote deploy base. Default: ${REMOTE_BASE}
  REMOTE_NGINX_CONF  Remote nginx conf path. Default: ${REMOTE_NGINX_CONF}
  STATIC_OUT_DIR     Local generated static dir. Default: ${STATIC_OUT_DIR}

Examples:
  deploy/deploy.sh --configure-nginx
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

RELEASE_ID="$(date -u +%Y%m%dT%H%M%SZ)-$(git rev-parse --short HEAD)"
REMOTE_RELEASE_DIR="${REMOTE_RELEASES_DIR}/${RELEASE_ID}"

echo "Creating remote release ${REMOTE_RELEASE_DIR}"
ssh "$REMOTE_HOST" "mkdir -p '$REMOTE_RELEASE_DIR' '$REMOTE_RELEASES_DIR'"

rsync -az --delete "${STATIC_OUT_DIR}/" "${REMOTE_HOST}:${REMOTE_RELEASE_DIR}/"

ssh "$REMOTE_HOST" "ln -sfn '$REMOTE_RELEASE_DIR' '$REMOTE_CURRENT_LINK'"

if [[ "$CONFIGURE_NGINX" -eq 1 ]]; then
  echo "Installing nginx config ${REMOTE_NGINX_CONF}"
  ssh "$REMOTE_HOST" "cat > '$REMOTE_NGINX_CONF' <<'NGINX_EOF'
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN};

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
        add_header Cache-Control \"public, max-age=86400\";
    }

    location = /og.png {
        try_files \$uri =404;
        add_header Cache-Control \"public, max-age=86400\";
    }

    location = /favicon.svg {
        try_files \$uri =404;
        add_header Cache-Control \"public, max-age=86400\";
    }

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
NGINX_EOF
nginx -t
systemctl reload nginx"
else
  echo "Skipped nginx config. Run with --configure-nginx for first-time setup."
fi

echo "Deployed ${RELEASE_ID} to ${SITE_URL}"
