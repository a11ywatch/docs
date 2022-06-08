---
id: ci
title: Continuous Integration
sidebar_label: CI
---

Using A11yWatch on the CI can be done with the CLI. This can also be hanlded using the [Github Action](https://github.com/A11yWatch/github-action) or [Circle CI Orb](https://github.com/A11yWatch/circleci-orb).

## Github Actions

[A11yWatch Github Action](https://github.com/A11yWatch/github-action)

A11yWatch comes with a github action that gives you real results across your workflow before you ship to production.
In the github action you can pass or fail PR's easily by configuring the ENV variables for your project. Here is an example using the action to fail if 10 accessibility errors occur on a page.

```yml
- uses: a11ywatch/github-action@v1.6.0
  with:
    WEBSITE_URL: ${{ secrets.WEBSITE_URL }}
    FAIL_ERRORS_COUNT: 10
    COMPUTER_VISION_SUBSCRIPTION_KEY: ${{ secrets.COMPUTER_VISION_SUBSCRIPTION_KEY }}
    COMPUTER_VISION_ENDPOINT: ${{ secrets.COMPUTER_VISION_SUBSCRIPTION_KEY }}
```

## CircleCI

Here is an example config using the A11yWatch orb to scan a website for issues. You need to use a machine image since the A11yWatch system uses docker to run. Replace `to` with your website url.
You can also use the scan across `steps`. Just make sure to install the CLI with `cargo install a11ywatch_cli` first if being used in the steps section. You can also use the CircleCI orb
at `a11ywatch/a11ywatch@dev:<<pipeline.git.revision>>` or view the [repo](https://github.com/A11yWatch/circleci-orb).

```yml
version: 2.1
orbs:
  codecov: codecov/codecov@1.0.2
  a11ywatch: a11ywatch/a11ywatch@dev:alpha
jobs:
  web:
    machine:
      image: ubuntu-2004:current
workflows:
  build_and_test:
    jobs:
      - web
      - web-e2e
      - a11ywatch/scan:
          to: "https://a11ywatch.com"
```

You can also use this [config](https://github.com/A11yWatch/a11ywatch/blob/main/.circleci/config.yml) as a template that the central A11yWatch repo uses.
