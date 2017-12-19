<!--
title: 08 - Installing npm packages globally
featured: true
-->

# Installing npm packages globally

There are two ways to install npm packages: locally or globally. You choose which kind of installation to use based on how you want to use the package.

If you want to use it a package as a command line tool, something like the grunt CLI, then you want to install it globally. This way, it works no matter which directory is your current directory. On the other hand, if you want to depend on the package from your own module using something like Node's `require`, then you want to install locally.

To download packages globally, you simply use the command `npm install -g <package>`, e.g.:

```
npm install -g jshint
```

If you get an EACCES error, [fix your permissions](/getting-started/fixing-npm-permissions). 

Consider using npx to run packages globally, if you have npm 5.2 or greater installed. 