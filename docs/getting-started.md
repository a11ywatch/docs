---
id: getting-started
title: Getting Started
slug: /
---

The easiest way to get started with [a11ywatch](https://github.com/A11yWatch/a11ywatch) is to use Docker or the [CLI](./cli.md).

## Development

First, you must checkout all repos into the same directory. Some of these repos are optional, but checking them all out allows you to hop around the code more easily. If you are not going to develop you can use docker compose to run the images.

```sh
cd $WORKING_DIRECTORY
git clone https://github.com/A11yWatch/a11ywatch-core.git
git clone https://github.com/A11yWatch/pagemind.git
git clone https://github.com/A11yWatch/web.git
git clone https://github.com/A11yWatch/mav.git
git clone https://github.com/A11yWatch/crawler.git
git clone https://github.com/A11yWatch/elastic-cdn.git
git clone https://github.com/A11yWatch/a11ywatch.git
```

Navigate to primary repo for main setup and start.

```sh
cd a11ywatch
```

## Docker

```sh
docker-compose up
```

development run

```sh
./scripts/dev.sh
```

## Util Commands

1. sync

- if your actively developing and need to sync all the repos run `./scripts/sync.sh`

1. deploy

- build docker images of stack and push to docker hub `./scripts/deploy.sh`
