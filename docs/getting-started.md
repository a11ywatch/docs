---
id: getting-started
title: Getting Started
slug: /
---

The easiest way to get started with [a11ywatch](https://github.com/A11yWatch/a11ywatch) is to use Docker.

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

Run the command below to setup your env for development using `docker-compose up`.

`bootstrap-envs.sh`

then you can start the development server as normal

for development run

`docker-compose --file dev.yml up`

## Local

First run the bootstrap command `./bootstrap.sh` at the root of the project to setup the project dependencies. Then cd into each service and follow the instructions on the readme to start.
