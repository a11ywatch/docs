---
id: mav
title: Mav
---

[View Repo](https://github.com/A11yWatch/mav)

The Mav image classification service uses [Computer Vision](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/#overview) and [Tensorflow](https://www.tensorflow.org/).
The primary purpose of MAV is to find alt tags for images using base64 data.

## Getting Started

1. `docker-compose up`

## Environmental Config

Some possible env configurations you may want to use:

```sh
# saves tons of mem when set to true
DISABLE_TENSORFLOW=true
# Computer Vision
COMPUTER_VISION_SUBSCRIPTION_KEY=
COMPUTER_VISION_ENDPOINT=
# PageSpeed or lighthouse
PAGESPEED_API_KEY=
```

## About

This service uses a couple different types of networks to determine if an image alt is valid.
