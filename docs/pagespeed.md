---
id: pagespeed
title: PageSpeed
description: Pagespeed at lightspeed with our custom setup integration. Get results across all pages quick.
---

[Core Web Vitals](https://pagespeed.web.dev/) are a set of speed metrics that are part of Google’s Page Experience signals used to measure UX. We retrieve them using Google’s PageSpeed Insights API externally and internally.

***This feature is only enabled for lite***

The web application in lite mode (the OSS version of the software) allows including Lighthouse or Pagespeed results into scans.

**important**

We removed this feature from our enterprise software since it was a duplicate of a handful of metrics and want to give you the best experience. We also want to limit all 3rd party integrations since maintenance can become tedious depending on the tool used.

## Settings

1. [Get a free API key from Google](https://developers.google.com/speed/docs/insights/v5/get-started)
2. Enter the received code as the env var `PAGESPEED_API_KEY` or through the settings panel.

After you sign on go to the top-right menu and go to the settings tab.

You can then insert your code in the text input.