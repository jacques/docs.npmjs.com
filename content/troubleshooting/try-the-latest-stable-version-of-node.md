<!--
title: 01 - Try the latest stable version of node
featured: true
-->

# Try the latest stable version of node

Node 0.4 and 0.6 are [no longer supported](https://github.com/npm/npm/issues/4379#issuecomment-31183058).

If you're experiencing issues while using a version of node which is unsupported (e.g 0.4.x or 0.6.x) or unstable (odd numbered versions e.g. 0.7.x, 0.9.x, 0.11.x), it's very possible your issue will be fixed by simply using the latest stable version of node.

## See what version of node you're running:

```
node -v
```

### Updating node on Linux

For some Linux distributions (Debian/Ubuntu and RedHat/CentOS), the latest node version provided by the distribution may lag behind the stable version.  Here are [instructions from NodeSource](https://github.com/nodesource/distributions) on getting the latest node.

### Updating node on Windows

Install the latest msi from <https://nodejs.org/download>

### Updating node on OSX

Install the latest package from <https://nodejs.org/download>

or if you are using [homebrew](http://brew.sh/)

```
brew install node
```

### Installing or updating node without elevated permissions

If you want to install/update node on a unix-like system but don't have root permissions, [here are a number of ways to do that](https://gist.github.com/isaacs/579814)!
