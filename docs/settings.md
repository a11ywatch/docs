---
description: How to configure the system for what you makes sense for you.
id: settings
title: Settings
---

Settings you can configure for indivual crawls through env configs or using the settings page.

## Core Web Vitals

Core Web Vitals are a set of speed metrics that are part of Google’s Page Experience signals used to measure user experience. We retrieve them using Google’s PageSpeed Insights API externally and internally. It’s free but limited to a daily quota.

1. [Get a free API key from Google](https://developers.google.com/speed/docs/insights/v5/get-started)
2. Enter the received code as the env var `PAGESPEED_API_KEY` or through the settings panel.

## Computer Vision

You can use [Computer Vision](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/#overview) by Microsoft to enhance alt tag validation with the ability to do OCR text.

Set the following env keys or in the settings of the application soon add:

```sh
COMPUTER_VISION_SUBSCRIPTION_KEY=
COMPUTER_VISION_ENDPOINT=
```