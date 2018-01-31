<!--
title: 09 - How to update global packages
featured: true
-->

# How to Update Global Packages

*Requires version 2.6.1 or greater. See below if you are using an older version.*

To update global packages, type:

 `npm update -g <package>`
 
 For example, to update a packages called jshint, you'd type:

```
npm update -g jshint
```

To find out which packages need to be updated, type:

 `npm outdated -g --depth=0`.

To update all global packages, type:

  `npm update -g`. 

####If you are using version 2.6.0 or less

For npm versions less than 2.6.1, run [this script](https://gist.github.com/othiym23/4ac31155da23962afd0e) to update all outdated global packages.

However, please consider upgrading to the latest version of npm. To do this, type:

`npm install npm@latest -g`.

