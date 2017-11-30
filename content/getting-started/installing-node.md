<!--
title: 02 - Installing npm and Node.js
featured: true
-->

# Installing Node.js and npm


npm is distributed with Node.js. When you download Node.js, Node.js automatically installs npm on your computer. So, to get started using npm, install Node.js. 

## Why do I need to install Node.js in order to use npm?

Node.js is a customized version of JavaScript, optimized to run on servers. It was designed so that developers could write fast applications that directly run on the server. It was so powerful and popular on servers that developers started to use it for local tasks as well. They created miniprograms, or packages, often to complete highly specific tasks, on both servers and local machines. Enter npm. npm developed a structure for managing and distributing these packages. So, to help you get the most out of Node.js, when you install it, npm is installed automatically as well. 

*For more about the relationship of Node.js to npm, see this excellent [article](https://www.sitepoint.com/beginners-guide-node-package-manager/) by Michael Wanyoike and Peter Dierx.*

#Best Practices

This chapter will explain how to install node.js and npm, and how to check versions. Chapter 3 explains a critical step you should take after installation on a mac, in ordr to avoid permissions issues.

###Step 1:  Install Node.js and npm 
 
If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from the [Node.js download page](https://nodejs.org/en/download/).

The best version of Node.js to use with npm is the latest version that is labelled “LTS”. This means "Long Term Support." From [nodejs.org]("https://nodejs.org/en/download/") click the green LTS button.   

![Windows Node LTS Choice](/images/win_installing_node_lts.png)

###Step 2: Validate the version of Node.js

To check that you have successfully installed Node.js, open a terminal or Windows shell. 
 
Run this command: 

`node -v`.  The version shown should be v8.9.1 or higher.


### Step 3. Update npm if needed 

Since npm gets updated more frequently than Node.js does, you may want to make sure that the version of npm the you just installed is the latest version. To learn the latest version of npm, scroll to the end of any doc page (like this one).

To learn the current version of npm, run this command from your terminal program:

`npm -v`  The version should be 5.5.1 or higher. 

If it isn't, type this:

`npm install npm@latest -g`

Test: Run `npm -v`. The version should be 5.5.1 or higher.

### Step 4. Install a Version Manager to handle permissions

Many Macintosh (OS/X and Linux) users find that Node.js installs npm in a file location that is not optimal for running npm packages globally. Please see Chapter 3 to learn more about setting permissions, and how to use a node version manager to solve this problem.  

If you are installing Node.js on Microsoft Windows, you may be able to skip Chapter 3, unless you see permissions errors. 

## For Advanced Users: Installing npm manually

The npm module is available for download at `https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz`.
