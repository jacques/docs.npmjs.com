## npmE installation requirements

npmE has been extensively tested on CentOS 6.5 and Ubuntu 14 (Trusty), and is
supported on most recent public Linux distributions. It can run inside a
virtual machine or on standard hardware. Since it can be configured to only
selectively mirror the public registry in addition to your private packages,
its disk space requirements are significantly lighter than other private
registry solutions.

## Latest version of node

Make sure you have the latest and greatest version of node. For Ubuntu, we
recommend the distribution put together by our friends at
[NodeSource](https://nodesource.com/). You can get that this way:


```bash
curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install nodejs
```

You can find out more about NodeSource's distribution of node in their
[blog post](https://nodesource.com/blog/chris-lea-joins-forces-with-nodesource)
about it.

## Latest version of npm

The version of npm compatible with npm Enterprise is still in beta, so it
is not yet bundled with node. To get it, run

```bash
sudo npm install npm@2.0.0 -g
```

## Hardware requirements

npm Enterprise does not use a great deal of processor or memory, so stock
hardware will work, with at least 2GB of RAM. Its primary variable requirement
is disk space: you need enough disk to hold every version of every package
you publish, and all the packages you mirror. This can be anywhere from a few
gigabytes to half a terabyte if you mirror the entire registry, so prepare
accordingly and adjust your [whitelist settings](/enterprise/whitelist) to
limit the packages you mirror.
