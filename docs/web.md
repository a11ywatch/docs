---
description: The A11yWatch web litemode application getting started page.
id: web
title: Web
---

[View Repo](https://github.com/a11ywatch/web)

This web project uses [next.js](https://nextjs.org/) to leverage SSG/SSR context with apollo and Rust to compile custom DS via wasm. 

The old marketing app and web application are tied together currently for the litemode builds.

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
