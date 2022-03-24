---
id: cli
title: Command Line Options
sidebar_label: CLI
---

The a11ywatch cli is an easy way to get started with running and deploying. This tool is currently in BETA and may require additional setup depending on whats being done.
If you are using the CLI to deploy make sure to `git clone https://github.com/A11yWatch/a11ywatch` the a11ywatch project and cd into `a11ywatch` to allow deploying from IaC via terraform.

## Getting Started

Make sure to have [`RUST`](https://www.rust-lang.org/tools/install) installed in order to get the cli. If you need to deploy to a remote cloud service like Google
you need to have [`terraform`](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed as well.

1. `cargo install a11ywatch_cli`

## Commands

You can run the `a11ywatch -h` command to get all the options and details for the CLI.

```sh
a11ywatch_cli 0.0.49
j-mendez <jeff@a11ywatch.com>
A11yWatch CLI to build, deploy, run, and manage all things.

USAGE:
    a11ywatch [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -f, --find-results             Log file results path
    -g, --github-api-url           Get github API endpoint of project
    -h, --help                     Print help information
    -r, --results-parsed           Get results file parsed to json
    -s, --set-token <SET_TOKEN>    Set the API token to use for request
    -V, --version                  Print version information

SUBCOMMANDS:
    build        Build the project on the local machine [defaults to docker runtime]
    deploy       Deploy the build on remote infrastructure
    extract      Extract results in formats for platforms
    help         Print this message or the help of the given subcommand(s)
    scan         Scan a website url for issues [only one page]
    start        Start the application on the local machine [defaults to docker runtime]
    stop         Stop the project on the local machine [defaults to docker runtime]
    terminate    Destroy the build on remote infrastructure. [defaults: GCP]
```

### Quick Start

To get started scanning your website with the cli run the following commands.

```sh
a11ywatch start
a11ywatch scan --url https://www.a11ywatch.com -s
```

## Deploying Remotely

You can deploy the project with terraform with a couple steps onto any infrastructure. If you are running the remote commands make sure to configure the terraform variables to match your project id and log in to gcloud via command line (`gcloud login`). Make sure to clone the repo and cd into the root. You can also install the CLI onto a machine and start up locally as well via docker or a simple bash script. Terraform provides a more balanced remote setup since the architecture is set to scale amongst different layers while the standard `build` + `start` commands use a single docker instance.
