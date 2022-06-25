---
id: developers
title: Developer Settings
---

Settings you can configure for indivual crawls.

## Core Web Vitals

Core Web Vitals are a set of speed metrics that are part of Google’s Page Experience signals used to measure user experience. We retrieve them using Google’s PageSpeed Insights API externally and internally. It’s free but limited to a daily quota.

1. [Get a free API key from Google](https://developers.google.com/speed/docs/insights/v5/get-started)
2. Enter the received code as the env var `PAGESPEED_API_KEY` or through the settings panel.
