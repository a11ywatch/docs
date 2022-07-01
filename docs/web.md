---
id: web
title: Web
---

[View Repo](https://github.com/A11yWatch/web)

The web project uses next.js to leverage SSG/SSR context with apollo to leverage GQL power. The marketing app and web application are tied together currently.

## Getting Started

1. `docker-compose up`

or

2. `npm run dev`

## Environmental Configuration

Here are some environmental configs you would want to add used in (process.env).

```sh
API=http://localhost:3280/graphql
WEB_SOCKET_URL=ws://localhost:3280/graphql
IFRAME_URL=http://localhost:3280
APP_TYPE=main
STRIPE_KEY=
SCRIPTS_CDN_URL_HOST=http://localhost:8090/cdn
CDN_URL_HOST=
CDN=
DOMAIN_NAME=https://a11ywatch.com
GOOGLE_CLIENT_ID=
INTERCOM_APPID=
INTERCOM_ENABLED=true
WORKBOX_MODE=production
SUPER_MODE=true
```
