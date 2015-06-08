<!--
title: 02 - Installing Node.js and updating npm
featured: true
-->

# Installing Node.js and updating npm

<iframe src="//www.youtube.com/embed/wREima9e6vk" frameborder="0" allowfullscreen></iframe>

## Installing Node.js

If you're using Mac or Windows, the best way to install Node.js is to use one of the installers from [nodejs.org](http://nodejs.org). If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

Test: Run `node -v`. The version should be higher than v0.10.32.

## Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

`sudo npm install npm -g`

Test: Run `npm -v`. The version should be higher than 2.1.8.
