---
id: crawler
title: Crawler
---

The crawler projects main purpose is to determine all valid urls on a website really fast [Repo](https://github.com/A11yWatch/crawler).
You can use the service with docker as an image `a11ywatch/crawler`.

## Docker

`docker-compose up`

or

`docker build -t crawler . && docker run -dp 8000:8000 crawler`

real time gather link and send link url to destination
