---
description: Learn how to use the Command Line Interface to self host or create CI pipelines step by step.
id: cli
title: Command Line Options
sidebar_label: CLI
---

[View Repo](https://github.com/A11yWatch/a11ywatch/tree/main/cli)

The A11yWatch CLI is an easy way to get started with running, deploying, and testing web accessibility.

## Pre-requisites

* [Rust](https://www.rust-lang.org/tools/install) is required.
* [Docker](https://docs.docker.com/get-docker/) is required if you are not building locally.
* [Nodejs](https://nodejs.org/en/download/) is required for local installs.

### Ubuntu

If you are on Ubuntu OpenSSL is required:

```sh
apt-get update && apt upgrade -y && apt-get install -y --no-install-recommends build-essential gcc cmake libc6 libssl-dev pkg-config
```

## Getting Started

You can get the CLI using [`cargo`](https://doc.rust-lang.org/cargo/commands/cargo-install.html) or [npm](https://nodejs.org/en/download/).

1. `cargo install a11ywatch_cli`
   or
1. `npm i a11ywatch-cli -g`


## CLI Commands

You can run the `a11ywatch -h` command to get all the options and details for the CLI.

```sh
a11ywatch_cli 0.8.21
j-mendez <jeff@a11ywatch.com>
A11yWatch accessibility CLI.

USAGE:
    a11ywatch [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -f, --find-results
            Log file results path

        --find-tmp-dir
            Get the apps tmp directory location

    -g, --github-api-url
            Get github API endpoint of project

        --github-results-path
            Log file results github path

    -h, --help
            Print help information

    -r, --results-parsed
            Get results file parsed to json

    -r, --results-parsed-list
            Get results file parsed as report list of passed / failed

        --results-issues
            Get the total amount of issues between errors,warning,notice that occurred for the result
            set

        --results-issues-errors
            Get the total amount of issues of type error from result set

        --results-issues-warnings
            Get the total amount of issues of type warning from result set

        --results-parsed-github
            Get results of the github html message

    -s, --set-token <SET_TOKEN>
            Set the API token to use for request

        --set-cv-token <SET_CV_TOKEN>
            Set the Computer Vision API token to use for request

        --set-cv-url <SET_CV_URL>
            Set the Computer Vision API endpoint to use for request

    -V, --version
            Print version information

SUBCOMMANDS:
    build        Build the project on the local machine [defaults to docker runtime]
    crawl        Site wide scan a website url for issues
    deploy       Deploy the build on remote infrastructure [BETA - defaults: GCP]
    extract      Extract results in formats for platforms
    help         Print this message or the help of the given subcommand(s)
    login        Authenticate current session
    scan         Single page scan a website url for issues
    start        Start the application on the local machine [defaults to docker runtime]
    stop         Stop the project on the local machine [defaults to docker runtime]
    terminate    Destroy the build on remote infrastructure [BETA - defaults: GCP]
```

### Quick Start

To get started scanning your website with the CLI run the following commands.

```sh
# pass -f option to start with the front-end
a11ywatch start
# single page scan and store results
a11ywatch scan --url https://a11ywatch.com -s
# full multi site crawl
a11ywatch crawl --url https://a11ywatch.com -s -d
# full site wide crawl with subdomains and TLDS
a11ywatch crawl --url https://a11ywatch.com -s -d --subdomains --tld
```

If you want to display detailed reports on the last scan run `a11ywatch --results-parsed-list`, the prior run also needs the `-s` flag to store results. This will bring up the last scan with pass/fail reports for each page.

Use the `-d` flag in order to enable real time log output of pages completed.

#### Code Fix

The command line gives you the ability to get code fixes right into your project after a scan using the `--fix` flag.

Run the following:

```sh
a11ywatch crawl --url https://a11ywatch.com -s -d --fix
```

####

## Deploying Remotely [Beta]

Make sure to have [`terraform`](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed.

In order to deploy using terraform to a third party you need to clone the A11yWatch [terraform-provider](https://github.com/A11yWatch/terraform-provider) first and navigate into the directory before running any of the deploy commands.
You can deploy the project with terraform with a couple steps onto any infrastructure. If you are running the remote commands make sure to configure the terraform variables to match your project id and log in to gcloud via command line (`gcloud login`). Make sure to clone the repo and cd into the root. You can also install the CLI onto a machine and start up locally as well via docker or a simple bash script. Terraform provides a more balanced remote setup since the architecture is set to scale amongst different layers while the standard `build` + `start` commands use a single docker instance.
