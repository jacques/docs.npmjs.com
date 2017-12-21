<!--
title: 02 - Installing npm & Managing npm Versions
-->

#How to Install npm & Manage npm Versions

npm is written in Node.js, so you need Node.js installed in order to run it. However, the two products are managed by different entities, so updates and maintenance can become complex. Also, the Node.js installation process installs npm in a directory that doesn't have global permissions. So, to solve both these issues, npm recommends that you use a *node version manager*, or *nvm*, to install npm. The version manager will avoid permissions errors, and solve the complexities of updating Node.js and npm. In addition, many developers like to test their applications on multiple versions of npm. Using a version manager makes this easier to do. 

####Warning 

If you install Node.js and npm directly, you may encounter permissions issues and errors (such as `EACCESS`), especially on macOS and Linux. 

##Installing npm from a Version Manager 

A version manager allows you to switch between node and npm versions, which makes it easier to ensure that your applications work for most users. Use the instructions for the version manager you select to learn how to switch versions, and to learn how to keep up-to-date with the latest version of npm. 

###Apple macOS 

There are several recommended approaches for installing npm for the MacOS. 

####Using HomeBrew to Install NVM

Many Macintosh developers use [Homebrew](https://brew.sh/), a valuable tool for managing apps and files.  

1. To install Homebrew, click [here](https://docs.brew.sh/Installation.html).

2. After you've installed Homebrew, run `brew install node` 

3. Homebrew will install Node.js and npm. 

4. To learn how to use nvm, click [here](https://github.com/creationix/nvm/blob/master/README.md#usage).

####Installing NVM Directly

If you don't want to install Homebrew, click [here](https://github.com/creationix/nvm/blob/master/README.md#installation) to learn how to install nvm without it. 

###Microsoft Windows
 
To install and manage npm and Node.js on Windows, we recommend that you install this version manager, [nvm-windows](https://github.com/coreybutler/nvm-windows).

###Linux

Click [here] (https://github.com/creationix/nvm/blob/master/README.md#installation) to learn how to install nvm for Linux.

#Installing npm Directly

Although it is not recommended for most users, you can install npm without a version manager. The Nodejs.org installation process will install Node.js and npm into /usr/local. 

> Note: using this method to install npm can lead to permissions errors such as `EACCESS`. To learn more about permissions, see [Chapter 3](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

###1. Install Node.js 

If you're using OS X or Windows, another way to install Node.js is to use one of the installers from the [Node.js download page](https://nodejs.org/en/download/). Be sure to install the version labeled **LTS**. Other versions have not been tested with npm. 
	
If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.
	
After installing, run `node -v`. The version should be higher than v8.9.1

### 2. Update npm

Node comes with npm installed so you should have a version of npm. 
However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

To test,  run `npm -v`. Compare this version with the version at the bottom of each page of doc (scroll down) to see if it's the latest version.

If the version is not the latest version, run:

`npm install npm@latest -g`

## How to Install npm from a Module

*For more advanced users*

The npm module is available for download on our [website](https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz).

# Experimenting with the Next Release 

*For more advanced users*

If you want to try the next, unreleased version of npm to test packages you have created, use this command:

`npm install npm@next -g`

This may simply reinstall the current version, depending on the development cycle. 

##