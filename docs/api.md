---
description: The A11yWatch lite API introduction on how to configure the service.
id: api
title: API
---

[View Repo](https://github.com/a11ywatch/a11ywatch-core)

The core API gateway for A11yWatch lite.

## Getting Started

1. `docker-compose up`

## API

You can use A11yWatch either using REST, [graphQL](https://a11ywatch.com/playground), or gRPC. At the moment the gRPC API is exposed with limits to consumers.
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
# enable CDN JS scripts
SCRIPTS_ENABLED=true
```

## Account Upgrade Programmatically

You can upgrade an account and build ontop of the infrastructure by using the following endpoints.

1. POST `/api/register` or `/api/login`.
1. GET `/api/client-key` - get the stripe client token.
1. Use key with [stripe.js](https://github.com/stripe/stripe-js) to get access to subscriptions.
1. GET `/api/plans` - display the plans and use with a UI to select options or programmatically use one by using the `title` property as `plan` on the next step.
1. POST `/api/upgrade` with body containing `stripeToken`, `plan`(title key from step 4), and `yearly` properties to determine if the yearly plan was selected with valid user authenticated in `header` or cookies enabled.

In order to cancel a subscription use `/api/cancel-subscription` with a valid user authenticated. 
You can upgrade and downgrade an account at any time using the endpoint between all plans with proration.

## Clients

You can use the OpenAPI clients to communicate with the API directly. Install the client with `npm i @a11ywatch/client`.

```ts
import {
  createConfiguration,
  ReportsApi,
  ServerConfiguration,
} from '@a11ywatch/client'

const configuration = createConfiguration({
    // replace localhost with api.a11ywatch.com for production
    baseServer: new ServerConfiguration('http://localhost:3280/api', {}),
    authMethods: {
        bearerAuth: {
        tokenProvider: {
            getToken: () => {
                // replace value with your JWT
                return ""
            },
        },
        },
    },
})

const api = new ReportsApi(configuration)

// audit an entire website chunked
const report = await api.crawlWebsiteStream('chunked', {
    url: 'https://jeffmendez.com',
})

console.log(report) 
```