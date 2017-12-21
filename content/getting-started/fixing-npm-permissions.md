<!--
title: 03 - How to prevent permissions errors
featured: true
-->

# How to Prevent Permissions Errors

If you see an `EACCES` error when you try to install a package globally, read this chapter. The `EACCES` error can usually be avoided if you change the directory npm runs from, either by reinstalling it with a version manager, or by changing its default directory. To install a version manager, see [Chapter 2](https://docs.npmjs.com/getting-started/installing-node). To alter npm's default directory, see option two, below. 

####Tip

If you are using npm version 5.2 or greater, you might also want to explore tools such as [npx](https://www.npmjs.com/package/npx) to circumvent permissions issues when running a package. 

### Option One: Reinstall with a Node Version Manager

This is the best way to avoid permissions issues. This is described in [Chapter 2](docs.npmjs.com/getting-started/installation-and-version-management.md). You do not need to remove your current version of npm or Node.js before installing a node version manager. 

### Option Two: Change npm's Default Directory 

*This section does not apply to Microsoft Windows. The chapter will be updated to address Windows in the near future.* 

To minimize chances of permissions errors, you can configure npm to use a different directory. In this example, it will be a hidden directory on your home folder.

Back-up your computer before moving forward.

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
     
### More about npx

Click here to read an excellent article about [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
