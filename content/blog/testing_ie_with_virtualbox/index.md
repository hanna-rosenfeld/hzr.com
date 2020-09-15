---
title: Testing ie with virtualbox and tunneling on Arch Linux
date: "2020-09-15T23:46:37.121Z"
---

running microsoft on a virtual machine inside of your operating system can seem like a hard task.

## dowload a version of microsoft

## install virtualbox

either [here](https://www.virtualbox.org/)

#or using a package manager:

install `virtualbox` and `virtualbox-host-modules-arch`
![bash](./yay0.png)

install `linux-lts-headers` for `linux-lts`
![shell](./yay1.png)

## setup your virtual machine

click 'new' then name it and select the version of microsoft windows you want to test. In my case it was Windows 10.

![](./winie.png)

When you are done creating your vm, you can boot it by clicking 'start'
After your system has booted up, seach for the `Windows PowerShell` and select `Run as Administrator`

![](./winie2.png)

## tunneling

Go ahead and run `netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=8000 connectaddress=10.0.2.2 connectport=8000` in your shell. This command will allow you to use the localhost port to run a directory from your linux os.

![](./ps.png)

Tada! How simple was that?

![](./web.png)
