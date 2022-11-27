---
id: pagemind
title: Pagemind
---

[View Repo](https://github.com/A11yWatch/pagemind)

Pagemind is the core for accessiblity and insights engine for A11yWatch. It uses puppeteer to run headless chrome test against websites.

## Getting Started

```
docker-compose up
```

Pagemind takes the foundations from [pa11y](https://pa11y.org/) and uses [litpa11y](https://github.com/j-mendez/litepa11y) optimized for speed to the next degree and 95% smaller in build size. Set for the needs of a web server.

## Features

1. Custom scripts based on the WCAG2.1 issues and beyond.
2. Pagespeed reports.
3. Near instant results.
4. Smart AI enhanced reports like missing alts.
5. Custom javascript scripts

## ENV

You can add the following env vars to adjust the system.
The env var `CHROME_LB` needs to be set to a http instance instead of https for performance.

```sh
# chrome instance http load balancer
CHROME_LB=
# disable AI
AI_DISABLED=
```