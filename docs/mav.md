---
id: mav
title: Mav
---

Mav is a image classification service using tensorflow. Its primary purpose is to find alt tags for images using base64 data.

## Getting Started

1. `docker-compose up`

## API

POST

```
/api/getImage
body: {img: Buffer}
```
