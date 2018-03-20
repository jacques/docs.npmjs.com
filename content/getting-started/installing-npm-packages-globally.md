<!--
title: 08 - How to install global packages
featured: true
-->

# How to Install Global Packages

There are two ways to install npm packages: locally or globally. Choose which kind of installation to use based on how you want to use the package.

* If you want to use a package as a command line tool, then install it globally. This way, it works no matter which directory is current. This is the choice you would use if you were installing grunt, for example. 

* If you want to depend on the package from your own module, then install it [locally](https://docs.npmjs.com/getting-started/installing-npm-packages-locally). This is the choice you would use if you are using require statements, for example. 

To download packages globally, use the command `npm install -g <package>`, e.g.:

```
npm install -g jshint
```

If you get an EACCES error, [see this chapter about permissions](/getting-started/fixing-npm-permissions). 

*Tip: Consider using npx to run packages globally, if you have npm 5.2 or greater installed.* 