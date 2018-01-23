<!--
title: 03 - How to prevent permissions errors
featured: true
-->

# How to Prevent Permissions Errors

If you see an `EACCES` error when you try to install a package globally, read this chapter. This error can often be avoided if you change the directory where npm is installed. To do this, either:

1.  Reinstall npm with a version manager (recommended), 
 
 	or
 
1.  Change npm's default directory manually. 


### Option One: Reinstall with a Node Version Manager

This is the best way to avoid permissions issues. This is described in [Chapter 2](https://docs.npmjs.com/getting-started/installing-node). You do not need to remove your current version of npm or Node.js before installing a node version manager. 

### Option Two: Change npm's Default Directory 

*This section does not apply to Microsoft Windows. This chapter will be updated to address Windows in the near future.* 

To minimize the chance of permissions errors, you can configure npm to use a different directory. In this example, it will be a hidden directory on your home folder.

1. Back-up your computer before you start. 

1. Make a directory for global installations:

        mkdir ~/.npm-global

2. Configure npm to use the new directory path:

        npm config set prefix '~/.npm-global'

3. Open or create a `~/.profile` file and add this line:

        export PATH=~/.npm-global/bin:$PATH

4. Back on the command line, update your system variables:

        source ~/.profile

Test: Download a package globally without using `sudo`.

        npm install -g jshint

Instead of steps 2-4, you can use the corresponding ENV variable (e.g. if you don't want to modify `~/.profile`):

        NPM_CONFIG_PREFIX=~/.npm-global
     
#### Tip: Consider npx

If you are using npm version 5.2 or greater, explore [npx](https://www.npmjs.com/package/npx) as an alternative way to run global commands, especially if you just need a command occassionally. Click here to read an excellent article about [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
