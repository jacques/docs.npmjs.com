<!--
title: 04 - Installing npm packages locally
featured: true
-->

# Installing npm packages locally

<iframe src="//www.youtube.com/embed/JDSfqFFbNYQ" frameborder="0" allowfullscreen></iframe>

There are two ways to install npm packages: locally or globally. You choose which kind of installation to use based on how you want to use the package.

If you want to depend on the package from your own module using something like Node's require, then you want to install locally, which is `npm install`'s default behavior. On the other hand, if you want to use it as a command line tool, something like the grunt CLI, then you want to [install it globally](/getting-started/installing-npm-packages-globally).

## Installing

A package can be downloaded with the command `npm install <package name>`. For example:

```
npm install lodash
```

This will create the `node_modules` directory (if one doesn't exist yet), and will download the package to that directory.

Test: Run `ls node_modules` on *nix systems, e.g. OSX, or `dir node_modules` on Windows. You should see a lodash directory inside.

## Which version of the package is installed?

If there is no `package.json` file in the local directory, the latest version of the package is installed.

If there is `package.json` file, the latest version satisfying the [semver rule](https://docs.npmjs.com/getting-started/semantic-versioning) declared in `package.json` for that package (if there is any) is installed.

## Using the installed package

Once the package is in node_modules, you can use it in your code. For example, if you are creating a Node module, you can require it.

Create a file named index.js, with the following code:

```
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
```

Test: Run the code using `node index.js`. It should output `[2, 3]`.

## Using package.json and the --save flag

Another way to manage npm packages locally is to create a `package.json` file. If you have a `package.json` file in your directory and you run `npm install`, then npm will look at the dependencies that are listed in that file and download the latest versions satisfying [semver rules](https://docs.npmjs.com/getting-started/semantic-versioning) for all of those. This is nice because it makes your build reproducible, which means that you can share it with other developers.

Create a file called `package.json` in your app directory.

```
{
    "name": "demo-app",
    "version": "1.0.0"
}
```

Download the package with the --save flag.

```
npm install lodash --save
```

This will download the package as before, but will also add it to the dependencies in `package.json` (unless it was already there).

Test: Check the `dependencies` key in package.json. `lodash` should be listed as a dependency.

## Manually adding dependencies to package.json

You can also add dependencies to package.json manually.

Add another package to your dependencies, e.g.:

```
"dependencies": {
    "lodash": "^2.4.1",
    "tap": "*"
}
```

Test: Run `npm install`, then `ls node_modules`. You should see a `tap` directory.

Note that if any package is already installed and satisfies the semver rule in `package.json`, running `npm install` will not update it to the latest version, even if there is one satisfying the same rule. In fact, no change is made to the package in this case, even if it was modified.

Thus, to reliably reinstall the latest versions of all packages satisfying the semver rules in `package.json`, delete the `node_modules` folder and run `npm install`.
