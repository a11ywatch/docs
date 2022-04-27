---
id: deployment
title: Deployment
---

At the moment we use Fargate to deploy all things A11yWatch but, not limited to only AWS. This page is for people who are trying to deploy A11yWatch on your own infrastructure.

## Getting Started

The quickest way to deploy the suite on the server is to install the `A11yWatch` CLI by running `cargo install a11ywatch_cli` on the server or in a Dockerfile and run the `a11ywatch start` command either in `CMD` or as a sidecar on your instance.

## CLI

After closing the core `a11ywatch` repo and navigating to the root directory of the project you can then follow the deployment steps on the [CLI](./cli.md#deploying-remotely) section.
