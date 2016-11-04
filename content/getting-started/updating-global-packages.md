<!--
title: 09 - Updating global packages
featured: true
-->

# Updating global packages

To update global packages, you can use `npm update -g <package>`:

```
npm update -g jshint
```

To find out which packages need to be updated, you can use `npm outdated -g --depth=0`.

To update all global packages, you can use  `npm update -g`. However, for npm versions less than 2.6.1, [this script](https://gist.github.com/othiym23/4ac31155da23962afd0e) is recommended to update all outdated global packages.
