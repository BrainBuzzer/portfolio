---
title: "GLIBC horror with Golang"
author: "Aditya Giri"
category: "coding"
date: "2023-03-14"
excerpt: "While Golang can compile cross-platform and run on anything, it is not as easy as it seems. I recently ran into a problem where I had to compile a binary for a Linux machine, but it was not working on the target machine. Turns out, it was because of the GLIBC."
---

Currently I am working on a project where I am using Golang. While Golang can compile cross-platform and run on anything, it is not as easy as it seems. Especially if you want to distribute the binary of the compiled code.

So, let's start at the beginning. I started writing a daemon which runs on servers in order to deploy the services on Nomad. This is pretty straightforward. I check if there is any Kafka message being received on the daemon, and if there is, I deploy the service on Nomad. While I would have gone with Rust in usual cases, I decided to go with Golang because of Nomad's Go API. I am not a fan of Go, but I am trying to learn it. So I decided to go with it.

It took me 1 month to complete the project since I also had write the compatibility with the main engine that I am using. I was able to get it working, and I was able to deploy the services on Nomad. I was pretty happy with the result. I was able to get it working on my machine, and I was able to compile the binary for Linux. So I decided to deploy it on the server and test it out. Since many major services provide support for Ubuntut 20.04, I decided to spin up an EC2 instance with Ubuntu 20.04 on it. The installation for everything went great, but I noticed the systemd service for Hyperlog Daemon was not starting.

So I decided to run the daemon manually, and I got the following error:

```
./hyperlogd: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by ./hyperlogd)
./hyperlogd: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32' not found (required by ./hyperlogd)
```

Seems abnormal? I checked the internet and found out that this is a common problem with Golang. Some of the suggestions said to compile the binary with `CGO_ENABLED`. But a lot of the responses said it is not a good practice as the code might leak. And also, with Go 1.20, that option is completely obsolete.

After digging around a bit more, I found out that if the binary was built on a machine older than the target machine, this problem might occur. Damn. So I spun up a new VM on Proxmox with Ubuntu 20.04 on it, and compiled the binary on that machine. I copied the binary to the server, and it still didn't work.

Althought this should have solved the problem, it did not. While distributing the binary file, I am still facing with this error.

I am currently going to leave this as it is and go back to Rust for building this daemon. After countless hours of trying to debug this, I think it's best I use that time to rewrite this entire daemon in Rust.

If anyone has the solution, feel free to write to me on mail@brainbuzzer.me or through my contact page. I would love to hear from you.