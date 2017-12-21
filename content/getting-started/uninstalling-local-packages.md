<!--
title: 07 - How to uninstall local packages
featured: true
-->

# How to Uninstall Local Packages 

<iframe src="https://www.youtube.com/embed/Z-BpYj6cSoQ" frameborder="0" allowfullscreen></iframe>

To remove a package from your node_modules directory, use:

 `npm uninstall <package>`:

```
npm uninstall lodash
```

To remove it from the dependencies in `package.json`, you will need to use the save flag:

```
npm uninstall --save lodash
```

Note: if you installed the package as a "devDependency" (i.e. with `--save-dev`) then `--save` won't remove it from `package.json`.  You have to use `--save-dev` to uninstall it.

#### Test:

To confirm that `npm uninstall` worked correctly, find the `node_modules` directory. Be sure that it no longer contains a directory for the package(s) you uninstalled.

You can do this by running:

*  `ls node_modules` on Unix systems such as "OSX"
*  `dir node_modules` on Windows.

#### Example:

Install a package called `lodash`. Confirm that it ran successfully by listing the contents of the `node_modules` directory and seeing a directory called `lodash`.

Uninstall `lodash` with `npm uninstall`. Confirm that it ran successfully by listing the contents of the `node_modules` directory and confirming the absence of a directory called `lodash`.

#####Install Lodash
```
> npm install lodash
> dir node_modules               # use `ls node_modules` for Unix
```

##### Uninstall Lodash
```
#=> lodash

> npm uninstall lodash
> dir node_modules               # use `ls node_modules` for Unix

#=>
```
