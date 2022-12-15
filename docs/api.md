---
description: The A11yWatch API introduction on how to configure the service.
id: api
title: API
---

[View Repo](https://github.com/A11yWatch/a11ywatch-core)

The core API gateway for A11yWatch.

## Getting Started

1. `docker-compose up`

## API

You can use A11yWatch either using REST, [graphQL](https://a11ywatch.com/playground), or gRPC. At the moment only the REST API is exposed to consumers.
View the [API endpoints available](https://a11ywatch.com/api-info) to get detailed examples with curl snippets.

## ENV Configuration

If your running A11yWatch on your own machine, some configs you may want to add consist of the following:

```sh
# everything unlocked for all users!
SUPER_MODE=true
DB_URL=mongodb://mongodb:27017/?compressors=zlib&gssapiServiceName=mongodb
DB_NAME=a11ywatch
# website front-end client allowed domains
CLIENT_URL=http://localhost:3000,http://0.0.0.0
GRAPHQL_PORT=3280
# email configs
EMAIL_CLIENT_KEY=
EMAIL_CLIENT_ID=
EMAIL_SERVICE_PASSWORD=
EMAIL_SERVICE_URL=
# assigned admin ip allowed to perform all actions
ADMIN_ORIGIN=
# server side analytics of front-end pages
GOOGLE_ANALYTIC_ID=
GOOGLE_CLIENT_ID=
# enable CDN JS scripts
SCRIPTS_ENABLED=true
```
