---
description: Help build the best web accessibility software by getting in on the code! Steps on installation and building for development. 
id: contributing
title: Contributing
---

You can contribute to the project by helping report bug issues, features, and code development.

## Prerequisites

If you want to use docker you can skip the NodeJS and Rust install.

- [NodeJS](https://nodejs.org/) | recommended version: `>= 18` 
- [Rust & Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) | recommended version: `>= 1.63`

## Development

First, you must checkout all repos into the same directory. Some of these repos are optional, but checking them all out allows you to hop around the code more easily. If you are not going to develop you can use docker compose to run the images.

Create a root directory for all of the files ex: `mkdir a11ywatch_project && cd a11ywatch_project`.


Clone all the repositories (or only the required ones).

```sh
git clone https://github.com/a11ywatch/a11ywatch.git
git clone https://github.com/a11ywatch/a11ywatch-core.git
git clone https://github.com/a11ywatch/pagemind.git
git clone https://github.com/a11ywatch/web.git
git clone https://github.com/a11ywatch/chrome.git
git clone https://github.com/a11ywatch/mav.git
git clone https://github.com/a11ywatch/crawler.git
git clone https://github.com/a11ywatch/elastic-cdn.git
```

Navigate to primary repo for main setup and start.

```sh
cd a11ywatch
```

### Docker

You can use the `docker compose --file docker/docker-compose.dev.yml up` to start up the docker instance in development mode.

If you want to run the production application run the command `docker compose --file docker/docker-compose.yml up`.

### Local

In order to start the project locally you need to navigate to each of the folders and run the `npm run dev` command. We might make a script for this if people tend to lean
towards developing local instead of docker.

## Pushing Changes to Github

After you have the development instances up you can submit a PR to the repos directly for review.
