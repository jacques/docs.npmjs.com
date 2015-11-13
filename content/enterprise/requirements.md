<!--
order: 2
title: Requirements
-->

# npm On-Site installation requirements

npm On-Site has been extensively tested on Ubuntu 14 (Trusty), and is
supported on most recent public Linux distributions.

Since it can be configured to only selectively mirror the public registry in
addition to your private packages, its disk space requirements are significantly
lighter than other private registry solutions. npm On-Site does not use a great
deal of processor or memory, so stock hardware will work, with at least 2GB of RAM (we test extensively AWS' [m3.large instances](https://aws.amazon.com/ec2/instance-types/)).

Its primary variable requirement is disk space: you need enough disk to hold every
version of every package you publish, and all the packages you mirror. This can be
anywhere from a few gigabytes to half a terabyte if you mirror the entire registry,
so prepare accordingly and adjust your [whitelist settings](/enterprise/whitelist)
to limit the packages you mirror.

For a walkthrough of installation, you can watch our [quickstart video](/enterprise/intro).

## Install the latest version of Node

[Update Node](/getting-started/installing-node) to the latest version.

For Ubuntu, we recommend the distribution put together by our friends at
[NodeSource](https://nodesource.com/). To install it, run:

```bash
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
```

## Install the latest version of npm

To use npm On-Site, the server needs to have a recent version (2.x or higher) of the npm client installed. To update npm, run:

```bash
sudo npm install npm -g
```

NOTE: Depending on your local setup, you may be able to omit sudo.
