<!--
title: 07 - Uninstalling local packages
featured: true
-->

# Uninstalling local packages

<iframe src="//www.youtube.com/embed/Z-BpYj6cSoQ" frameborder="0" allowfullscreen></iframe>

You can remove a package from your node_modules directory using `npm uninstall <package>`:

```
npm uninstall lodash
```

To remove it from the dependencies in `package.json`, you will need to use the save flag:

```
npm uninstall --save lodash
```
