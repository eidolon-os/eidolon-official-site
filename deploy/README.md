# Eidolon Official Site Deployment

The site is deployed as a static nginx site. The local build renders vinext's
server output into a static `index.html`, copies `dist/client` assets, then
syncs the artifact to the server.

## First Deploy

```bash
deploy/deploy.sh --configure-nginx --install-ssl
```

Defaults:

- SSH target: `root@eidolon`
- Domain: `eidolon.aimanthor.com`
- Public URL: `https://eidolon.aimanthor.com/`
- Remote base: `/var/www/eidolon-official-site`
- Local TLS certificate: `/Users/manson/tmp/19525696_aimanthor.com_nginx/aimanthor.com.pem`
- Local TLS private key: `/Users/manson/tmp/19525696_aimanthor.com_nginx/aimanthor.com.key`
- Remote TLS directory: `/etc/nginx/ssl/aimanthor.com`

`--install-ssl` uploads the local certificate and private key to nginx, sets the
private key permission to `600`, and `--configure-nginx` installs an HTTPS
server block plus an HTTP-to-HTTPS redirect.

Do not point nginx at `/root/workspace` unless the nginx worker user has execute
permission on every parent directory. A default `/root` directory is usually not
traversable by nginx and will produce `Permission denied` plus an internal
redirect loop.

If you deliberately want to use `/root/workspace`, override it explicitly:

```bash
REMOTE_BASE=/root/workspace/eidolon-official-site deploy/deploy.sh --configure-nginx
```

## Later Deploys

```bash
deploy/deploy.sh
```

## Local Build Check

```bash
deploy/deploy.sh --build-only
```

## Useful Overrides

```bash
SITE_URL=https://eidolon.aimanthor.com/ \
DOMAIN=eidolon.aimanthor.com \
REMOTE_HOST=root@eidolon \
REMOTE_BASE=/var/www/eidolon-official-site \
LOCAL_SSL_CERT_PATH=/Users/manson/tmp/19525696_aimanthor.com_nginx/aimanthor.com.pem \
LOCAL_SSL_KEY_PATH=/Users/manson/tmp/19525696_aimanthor.com_nginx/aimanthor.com.key \
deploy/deploy.sh
```
