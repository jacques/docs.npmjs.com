<!--
title: 08 - Updating global packages
featured: true
-->

# Updating global packages

To update global packages, you can use `npm install -g <package>`:

```
npm install -g jshint
```

To find out which packages need to be updated, you can use `npm outdated -g --depth=0`.

There is a command that updates all global packages, `npm update -g`, but it is currently [not recommended](https://github.com/npm/npm/issues/6247). Until that issue is fixed, you can use [this script](https://gist.github.com/othiym23/4ac31155da23962afd0e) to update all outdated global packages.
