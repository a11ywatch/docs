---
id: pagemind
title: PageMind
---

[View Repo](https://github.com/A11yWatch/pagemind)

PageMind is the core for accessiblity and insights the brains of A11yWatch. It uses puppeteer to run headless chrome test against websites.

## Getting Started

```
docker-compose up
```

Pagemind uses a fork of [pa11y](https://pa11y.org/) called [litpa11y](https://github.com/j-mendez/litepa11y) optimized for speed to the next degree and about 90% smaller in build size.

## Features

1. Custom scripts based on the WCAG2.1 issues returned from pa11y.
2. Accessibility beyond WCAG2.1.
3. Near instant results.
