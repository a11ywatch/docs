---
id: getting-started
title: Getting Started
slug: /
---

The easiest way to get started with [a11ywatch](https://github.com/A11yWatch/a11ywatch) is to use Docker.

To get started clone the project https://github.com/A11yWatch/a11ywatch

## Docker

Run the command below to setup your env for development.

`bootstrap-envs.sh`

then you can start the development server as normal

`docker-compose up`

for development run

`docker-compose --file dev.yml up`

## Local

First run the bootstrap command `./bootstrap.sh` at the root of the project to setup the project dependencies. Then cd into each service and follow the instructions on the readme to start.
