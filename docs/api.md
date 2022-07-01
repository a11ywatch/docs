---
id: api
title: API
---

[View Repo](https://github.com/A11yWatch/a11ywatch-core)

The core API gateway for A11yWatch.

## Getting Started

1. `docker-compose up`

## API

You can use A11yWatch either using REST, [graphQL](https://a11ywatch.com/playground), or gRPC. At the moment only the REST API is exposed to consumers.
You can view the API endpoints available [here](https://a11ywatch.com/api-info).

## ENV Configuration

If your running A11yWatch on your own machine, some configs you may want to add consist of the following:

```sh
# stripe (if your forking as a new product and like the payment plan setup )
STRIPE_BASIC_PLAN=
STRIPE_BASIC_PLAN_YEARLY=
STRIPE_PREMIUM_PLAN=
STRIPE_PREMIUM_PLAN_YEARLY=
STRIPE_KEY=
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
```
