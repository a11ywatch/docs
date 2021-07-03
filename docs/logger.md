---
id: logger
title: Logger
---

Transport logs from all services to one central location. This service is not actively being used and going to be removed for network watching instead.

## Getting Started

1. `docker-compose up`

Base endpoint POST/GET

http://localhost:8022/api/log?type=info
ex: post body data to send {"type": "info", "message": "test", "platform": "ios", "container": "postman" }

## backup

Data us sent to s3 for backups.
