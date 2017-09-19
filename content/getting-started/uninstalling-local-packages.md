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

Note: if you installed the package as a "devDependency" (i.e. with `--save-dev`) then `--save` won't remove it from `package.json`.  You have to use `--save-dev` to uninstall it.

#### Test:

To confirm that `npm uninstall` worked correctly, check to see that the `node_modules`
directory exists, but that it does not contain a directory for the package(s) you uninstalled.
You can do this by running `ls node_modules` on Unix systems, e.g. "OSX", "Debian", or `dir node_modules`
on Windows.

#### Example:

Install a package called `lodash`. Confirm that it ran successfully by listing the
contents of the `node_modules` directory and seeing a directory called `lodash`.

Uninstall `lodash` with `npm uninstall`. Confirm that it ran successfully by listing the
contents of the `node_modules` directory and confirming the absence of a directory called `lodash`.

```
> npm install lodash
> ls node_modules               # use `dir` for Windows

#=> lodash

> npm uninstall lodash
> ls node_modules

#=>
```
