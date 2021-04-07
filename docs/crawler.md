---
id: crawler
title: Crawler
---

The crawler main purpose is to determine all valid urls on a website really fast. [Repo](https://github.com/A11yWatch/crawler).

You can use the service with docker as a image `jeffmendez19/crawler`. 

## Docker

`docker build -t crawler . && docker run -dp 8000:8000 crawler`

```
curl --location --request POST 'http://0.0.0.0:8000/crawl' \
--header 'Content-Type: application/json' \
--data-raw '{"url": "http://www.drake.com", "id": 0 }'

// output
{
    "pages": [
        "http://www.drake.com/",
        "http://www.drake.com/?hsLang=en"
    ],
    "user_id": 0,
    "domain": "http://www.drake.com"
}

```
