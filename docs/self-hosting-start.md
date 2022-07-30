---
id: self-hosting-start
title: Getting started
---

The easiest way to get started with A11yWatch is with our official managed service in the Cloud. It takes 2 minutes to start getting web accessibility and vitals across multi pages at high velocity. Our managed hosting can save a substantial amount of developer time and resources. For most sites this ends up being the best value option and the revenue goes to funding the maintenance and further development of A11yWatch. So you’ll be supporting open source software and getting an amazing service! The section below is for self-hosting our suite on your server and managing your infrastructure.

## Docker

The simplest way to get started with the suite is to use docker. You can use the [@a11ywatch/a11ywatch](https://hub.docker.com/r/a11ywatch/a11ywatch) image to deploy the fully managed suite across linux, windows, and macOS. By the default the main entry to the graphQL, and gRPC server starts on port 3280. You can also use the gRPC instances directly following the [protobuf def here](https://github.com/a11ywatch/a11ywatch/tree/main/clients/src/proto). You can also install the suite by using the individual [images seperately](https://github.com/a11ywatch/a11ywatch/blob/main/docker/docker-compose.production.yml).

Example with docker compose of the configuration.

```yml
version: "3.9"
services:
  a11ywatch:
    image: a11ywatch/a11ywatch
    ports:
      - 3280:3280
```

In terminal you can verify if the instance started with:

```sh
 curl -s --location --request POST 'http://localhost:3280/api/crawl-stream' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'websiteUrl=https://jeffmendez.com'
```

## CLI

The CLI allows for installing and started the application in multiple fashions.

You can use the CLI to start locally via nodejs, Docker Standalone, or Docker Multi Service.

The differences between the standalone and multi is that the standalone combines all of the micro-services into one launcher to use while
the multi service starts each individually.

```sh
# install via cargo
cargo install a11ywatch_cli
# install via npm
npm i a11ywatch-cli -g
```

```sh
# build the instance first, this allows configuring architecture specifics like m1 chips.
a11ywatch build
# start the instance. If you need the front-end client passing the -f option [min of 1.25gb of memory required alloc to docker resource].
a11ywatch start
# scan a url and pipe the stdout to a file.
a11ywatch scan --url https://a11ywatch.com > results.json
# scan a url and attempt to fix code based on recommendations [installs the fast ripgrep crate for search].
a11ywatch scan --url https://a11ywatch.com --fix
# scan a website multi page and pipe the stdout to a file.
a11ywatch crawl --url https://a11ywatch.com > results.json
# scan a website multi page and include subdomains.
a11ywatch crawl --url https://a11ywatch.com -S > results.json
# scan a website multi page and include subdomains and all TLD extensions.
a11ywatch crawl --url https://a11ywatch.com -S -t > results.json
```

## K8

We check in the k8 [files here to use](https://github.com/a11ywatch/a11ywatch/tree/main/kubernetes).

## Javascript

You can also start the entire suite using any javascript runtime like [nodejs](https://nodejs.org/en/) or [bun](https://bun.sh/) using the `@a11ywatch/a11ywatch` module.

```sh
# node
npm i @a11ywatch/a11ywatch
# bun - needs npm i puppeteer first due to chrome being skipped in bun installation. You can skip the puppeteer install if you already have a chrome instance to connect to.
npm i puppeteer && bun install
```

```ts
// import in your file
import "@a11ywatch/a11ywatch";
```

or run process outside of a script.

```sh
# node
node ./node_modules/@a11ywatch/a11ywatch/server.js
# bun
bun run ./node_modules/@a11ywatch/a11ywatch/server.js
```
