---
title: "Setting up my Homelab"
author: "Aditya Giri"
category: "coding"
date: "2023-03-05"
excerpt: "Having my own homelab has always been my dream. I recently managed to get around building one, and I am most definitely learning a lot from this experience."
---

I have seen a lot of videos about people setting up their own Homelabs with crazy infrastructure right at home, and I always wanted to build one for myself. I finally managed to do that, so in this post, I am going to briefly detail out what exactly I have done, and how I use it.

## Why a homelab?
Why not? Having a couple of machines to just toy around with is always good. I can most definitely use Raspberry Pi, but the prices of those is significantly higher than just buying old PCs in India at least. And the main reason for me was I wanted to learn more about networking and how to set up a server. I have been using Linux for a while now, and have deployed cloud servers, but I have never really set up a server from scratch. So this was a good opportunity to learn more about it.

## What I have
* 3x Dell Optiplex 7010
* 1x 4 Port Gigabit Switch
That's about it. kind of a small setup, but I am still learning. Each of the optiplex have 4 cores and 16GB of memory.

## What I use it for
I would want to deploy my portfolio site on there but since my ISP is not giving dedicated public ip to me, I can't do that. I am currently using it to host a few services on my local network, and access most of them by using Tailscale MagicDNS. The services that I am currently running are:
* Plex
* Nextcloud
* PiHole
* Portainer
* Traefik
* Unifi Controller

## How I set it up
For the complete setup, I just decided to go with something more enterprisy. So I decided to install Proxmox on each of those systems with one of them acting as the main control plane, and other two are nodes. This way I can create as many services and VMs as I want (ofc this is less considering there's only 12 cores to work with).

I decided to use Terraform in order to spin up the machines since that seemed only logical. Have 2 birds in 1 stone. I always wanted to learn Terraform and this was a good opportunity to do so. I will write another blog post about how I set up the infrastructure using Terraform.

## So what's next?
Over the next coming days, I will be writing a lot more posts on how I set up each of the services, and how I use them. This is just the first post in the series. I will also be writing about how I set up the infrastructure using Terraform. So stay tuned for that.
