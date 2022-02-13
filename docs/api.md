---
id: api
title: API
---

The core API for a11ywatch. All things go through this service. A more detailed doc to come.

## Getting Started

1. `docker-compose up`

## API

can use A11yWatch either using REST or graphql.

1. REST
1. graphQL

## ENV Configuration

Here are some configs you would want to add.

```
# stripe (if your forking as a new product and like the payment plan setup )
STRIPE_BASIC_PLAN=
STRIPE_BASIC_PLAN_YEARLY=
STRIPE_PREMIUM_PLAN=
STRIPE_PREMIUM_PLAN_YEARLY=
# email
EMAIL_SERVICE_URL=support@someemail.com
EMAIL_MAIN_LEAD=emailforreports@someemail.com
EMAIL_SERVICE_PASSWORD=SomePassword
```
