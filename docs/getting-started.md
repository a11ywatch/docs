---
id: getting-started
title: Getting Started
slug: /
---

The easiest way to get started with [a11ywatch](https://github.com/A11yWatch/a11ywatch) is to use Docker or the [CLI](./cli.md).

## Development

First, you must checkout all repos into the same directory. Some of these repos are optional, but checking them all out allows you to hop around the code more easily. If you are not going to develop you can use docker compose to run the images.

Enter the working directory
```sh
cd $WORKING_DIRECTORY
```

Clone all the repositories (or only the required ones).
```sh
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

You can use the `docker compose --file dev.yml up ` to start up the docker instance targeting the `dev.yml` file.

If you want to run the production application simply `docker compose up`. If you want to easily get started with the system use the [CLI](https://docs.a11ywatch.com/documentation/cli/) to perform actions.
