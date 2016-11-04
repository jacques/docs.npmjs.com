<!--
title: 07 - Uninstalling local packages
featured: true
-->

# Uninstalling local packages

<iframe src="https://www.youtube.com/embed/Z-BpYj6cSoQ" frameborder="0" allowfullscreen></iframe>

You can remove a package from your node_modules directory using `npm uninstall <package>`:

```
npm uninstall lodash
```

To remove it from the dependencies in `package.json`, you will need to use the save flag:

```
npm uninstall --save lodash
```

Note: if you installed the package as a "devDependency" (i.e. with `--save-dev`) then `--save` won't remove it from `package.json`  You have to use `--save-dev` to uninstall it.
