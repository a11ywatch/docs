---
id: cli
title: Command Line Options
sidebar_label: CLI
---

The a11ywatch cli is an easy way to get started with running and deploying. The CLI is currently in BETA and may require additional setup depending on whats being done.
If you are using the CLI to deploy make sure to `git clone https://github.com/A11yWatch/a11ywatch` the a11ywatch project and cd into `a11ywatch` to allow deploying from IaC via terraform.

## Getting Started

Make sure to have [`RUST`](https://www.rust-lang.org/tools/install) installed in order to get the cli. If you need to deploy to a remote cloud service like Google
you need to have [`terraform`](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed as well.

1. `cargo install a11ywatch_cli`

## Commands

You can run the `a11ywatch -h` command to get all the options and details for the CLI.
If you are running the remote commands make sure to configure the terraform variables to match your project id and log in to gcloud via command line (`gcloud login`).

```sh
(base) ➜  cli git:(main) a11ywatch -h
a11ywatch_cli 0.0.7
j-mendez <jeff@a11ywatch.com>
A11yWatch CLI to build, deploy, and manage all things.

USAGE:
    a11ywatch [SUBCOMMAND]

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    build        Build the project on the local machine [defaults to docker runtime]
    deploy       Deploy the build on remote infrastructure
    help         Print this message or the help of the given subcommand(s)
    start        Start the application on the local machine [defaults to docker runtime]
    terminate    Destroy the build on remote infrastructure. [defaults: GCP]
```
