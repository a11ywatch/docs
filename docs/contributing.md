---
id: contributing
title: Contributing
---

You can contribute to the project in multiple ways.

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

You can use the `docker compose --file docker/docker-compose.dev.yml up` to start up the docker instance in development mode.

If you want to run the production application simply `docker compose --file docker/docker-compose.yml up`. If you want to easily get started with the system use the [CLI](https://docs.a11ywatch.com/documentation/cli/) to perform actions.

## Github

After you have the development instances up you can submit a PR to the repos directly for review.
