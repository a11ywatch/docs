---
id: deployment
title: Deployment
---

At the moment we use Fargate to deploy all things A11yWatch but, not limited to only AWS. This page is for people who are trying to deploy A11yWatch on your own infrastructure.

## Getting Started

The quickest way to deploy the suite on the server is to install the `A11yWatch` CLI by running `cargo install a11ywatch_cli` on the server or in a Dockerfile and run the `a11ywatch start` command either in `CMD` or as a sidecar on your instance.

## CLI

After closing the core `a11ywatch` repo and navigating to the root directory of the project you can then follow the deployment steps on the [CLI](./cli.md#deploying-remotely) section.

## AWS EC2

Getting started on AWS EC2 linux with the following commands:

```sh
# update packages
sudo yum update -y
# install development tools cc
sudo yum groupinstall "Development Tools"
# install docker
sudo yum install docker -y
# start docker
sudo service docker start
# install command to group
sudo usermod -a -G docker ec2-user
# install docker compose
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
# install rust
sudo curl https://sh.rustup.rs -sSf | sh -s -- -y
# configure shell to use new rust path
$HOME/.cargo/env
# install a11ywatch
cargo install a11ywatch_cli
# start a11ywatch
a11ywatch start
# run scan on website this works internally on the container too
a11ywatch scan --url https://a11ywatch.com --save
```

Make sure to update your security groups to allow inbound traffic on port `3280` for the API instance.
