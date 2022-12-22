---
description: The main services that make the platform. Learn how each one works and how to make the most of it.
id: services
title: Services
sidebar_label: Services
---

View micro-service details on purpose and port entry below.

All of the services use [gRPC](https://grpc.io/) to communicate except the primary API allows REST, Graphql, and gRPC entrypoints.

The only service that is exposed outside to connections is the `web` service which is the front-end application and the central gateway `api` in production. Use the [central repo](https://github.com/A11yWatch/a11ywatch) in order to run all of the services together through docker or the [sidecar](https://github.com/A11yWatch/sidecar).

| Service                                             | Container Purpose                                | Default Port     |
| --------------------------------------------------- | ------------------------------------------------ | ---------------- |
| [web](/documentation/web)                           | web application that interacts with the main api | 3270, 80, & 3000 |
| [api](/documentation/api)                           | central core API entry                           | 3280 & 50051     |
| [pagemind](/documentation/pagemind)                 | website accessibility and automation             | 50052            |
| [mav](/documentation/mav)                           | image detector generating names with probability | 50053            |
| [cdn-server](/documentation/cdn-server)             | create and store js scripts to fix web issues    | 50054            |
| [crawler](/documentation/crawler)                   | website crawler and indexer                      | 50055            |
| [mongodb](https://www.mongodb.com)                  | core database                                    | 27017            |
| [redis](https://www.redis.com)                      | memory database                                  | 6379             |
| [chrome](https://github.com/a11ywatch/chrome) | google chrome launched via `tini`                      | 9222             |
