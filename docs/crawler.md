---
id: crawler
title: Crawler
---

The crawler main purpose is to determine all valid urls on a website really fast [Repo](https://github.com/A11yWatch/crawler).
You can use the service with docker as an image `a11ywatch/crawler`.

## Docker

`docker-compose up`

or

`docker build -t crawler . && docker run -dp 8000:8000 crawler`

make sure to have the `CRAWL_URL` env var set to tell the service its finished

```sh
curl --location --request POST 'http://0.0.0.0:8000/crawl' \
--header 'Content-Type: application/json' \
--data-raw '{"url": "http://www.drake.com", "id": 0 }'
```

real time gather link and send link

```sh
curl --location --request POST 'http://0.0.0.0:8000/scan' \
--header 'Content-Type: application/json' \
--data-raw '{"url": "http://www.drake.com", "id": 0 }'
```
