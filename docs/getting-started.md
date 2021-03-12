---
id: getting-started
title: Getting Started
slug: /
---

The easiest way to get started with a11ywatch is to use Docker [a11ywatch](https://github.com/A11yWatch/a11ywatch).
Try to allocate atleast 4gb of memory to docker. We are actively working on reducing this.

## Docker

first bootstrap your env keys

`bootstrap-envs.sh`

then you can start the development server as normal

`docker-compose up`

## Local

First run the bootstrap command `./bootstrap.sh` at the root of the project to setup the project dependencies. Then cd into each service and follow the instructions on the readme to start.
