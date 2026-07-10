# Eidolon Official Site Deployment

The site is deployed as a static nginx site. The local build renders vinext's
server output into a static `index.html`, copies `dist/client` assets, then
syncs the artifact to the server.

## First Deploy

```bash
deploy/deploy.sh --configure-nginx
```

Defaults:

- SSH target: `root@eidolon`
- Domain: `eidolon.aimanthor.com`
- Public URL: `http://eidolon.aimanthor.com/`
- Remote base: `/var/www/eidolon-official-site`

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
SITE_URL=http://eidolon.aimanthor.com/ \
DOMAIN=eidolon.aimanthor.com \
REMOTE_HOST=root@eidolon \
REMOTE_BASE=/var/www/eidolon-official-site \
deploy/deploy.sh
```
