<!--
title: 02 - How to install npm & manage npm versions 
-->

#How to Install npm & Manage npm Versions

npm is written in Node.js, so you need to install Node.js in order to use npm. You can install npm via the Node.js website, or by installing a _Node Version Manager_ or NVM. This chapter explains both options. 

If you just want to get started exploring npm, using the Node.js installation method is fastest. If you are an advanced developer ready to jump in and work with versions, use the node version manager. If you aren't sure, please read this chapter before you decide. You can always change how you run npm in the future. 

# Installing npm from the Node.js site

##1. Install Node.js & npm

If you're using OS X or Windows, use one of the installers from the [Node.js download page](https://nodejs.org/en/download/). Be sure to install the version labeled **LTS**. Other versions have not yet been tested with npm. 

![DOSPIC](/images/win-installing-node-lts.png)
	
If you're using Linux, you can find installers by scrolling on the [Node.js download page](https://nodejs.org/en/download/), or, check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see if there's a more recent version that works with your system.
	
After installing, run `node -v`. The version should be v8.9.1 or higher.

## 2. Update npm

When you install node.js, npm is automatically installed. However, npm gets updated more frequently than Node.js, so be sure that you have the latest version.

To test,  run `npm -v`. 

To be sure that this matches the latest version, scroll to the bottom of this page.  If the version you see does not match the latest version, run:

`npm install npm@latest -g`.

This will install the latest official, tested version of npm. 

To install a version that will be released in the future, run:

 `npm install npm@next -g`.


# Using a Version Manager to install Node.js and npm

Since npm and node.js products are managed by different entities, updates and maintenance can become complex. Also, the Node.js installation process installs npm in a directory that only has local permissions. This can cause permissions errors when you attempt to run packages globally. 

To solve both these issues, many developers opt to use a *node version manager*, or *nvm*, to install npm. The version manager will avoid permissions errors, and will solve the complexities of updating Node.js and npm. 

In addition, developers can use an nvm to test their applications on multiple versions of npm. The nvm enables you to easily switch npm as well as node versions. This makes it easier to ensure that your applications work for most users, even if they are using other versions of npm. If you decide to install a version manager, use the instructions for the version manager you select to learn how to switch versions, and to learn how to keep up-to-date with the latest version of npm. 

## Apple macOS 

Click [here](https://github.com/creationix/nvm/blob/master/README.md#installation) to learn how to install nvm for MacOs.  

## Microsoft Windows 
 
To install and manage npm and Node.js on Windows, we suggest [nvm-windows](https://github.com/coreybutler/nvm-windows).

## Linux 

Click [here] (https://github.com/creationix/nvm/blob/master/README.md#installation) to learn how to install nvm for Linux.

# Experimenting with the Next Release 

*For more advanced users*

If you want to try the next, unreleased version of npm to test that packages you have created will work with the planned next release of npm, use this command:

`npm install npm@next -g`

This may simply reinstall the current version, depending on the development cycle. Also, this early version is not final. So features may or may not match what is ultimately released.  

## Learn More

To learn more about how to use nvm, click [here](https://github.com/creationix/nvm/blob/master/README.md#usage).


