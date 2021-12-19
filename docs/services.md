---
id: services
title: Services
sidebar_label: Services
---

All of the services in the a11ywatch eco-system

| Service                                 | Container Purpose                                      | Default Port |
| --------------------------------------- | ------------------------------------------------------ | ------------ |
| [web](/documentation/web)               | web application that interacts with the main api       | 3000         |
| [api](/documentation/api)               | central core API                                       | 8080         |
| [mav](/documentation/mav)               | image detector for generating names with probability   | 8020         |
| [pagemind](/documentation/pagemind)     | website issue detector engine with accessibility fixes | 8040         |
| [crawler](/documentation/crawler)       | gather all urls/webpages for a website                 | 8000         |
| [cdn-server](/documentation/cdn-server) | create and store js scripts to fix web issues          | 8090         |
| [logger](/documentation/logger)         | stream of all logs across micro-services (optional)    | 8022         |
| [mongodb](https://www.mongodb.com/)     | central database for website and user data storage     | 27017        |
