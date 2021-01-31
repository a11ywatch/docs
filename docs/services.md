---

id: services
title: Services
sidebar_label: Services
---All of the services in the a11ywatch eco-system

| Service                              | Container Purpose                                              | Default Port |
| ------------------------------------ | -------------------------------------------------------------- | ------------ |
| [web](/docs/web)                     | web application that interacts with the main api               | 3000         |
| [api](/docs/api)                     | central core api for the monolith                              | 8080         |
| [mav](/docs/mav)                     | image detector api for generating names with probability       | 8020         |
| [angelica](/docs/angelica)           | website issue detector api engine with accessibility fixes     | 8040         |
| [watcher](/docs/watcher)             | gather all urls/webpages api for a website                     | 8000         |
| [cdn-server](/docs/cdn-server)       | create and store js scripts to fix web issues                  | 8090         |
| [iframe-server](/docs/iframe-server) | render websites on proxy domain for manipulation               | 8010         |
| [example-site](/docs/example-site)   | create and test issues for the accessibility engine (optional) | 8050         |
| [logger](/docs/logger)               | stream of all logs across micro-services (optional)            | 8022         |
| [mongodb](https://www.mongodb.com/)  | central database for website and user data storage             | 27017        |
