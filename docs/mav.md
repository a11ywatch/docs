---
id: mav
title: Mav
---

[View Repo](https://github.com/A11yWatch/mav)

The Mav image classification service uses tensorflow and cairo to replicate the images for tensorflow objects. The primary purpose of MAV is to find alt tags for images using base64 data.

## Getting Started

1. `docker-compose up`

## About

This service uses a couple different types of networks to determine if an image is valid. Since accuracy is important we only take images that meet a certain probability rate.
