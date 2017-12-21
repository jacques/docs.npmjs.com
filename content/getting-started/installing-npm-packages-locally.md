<!--
title: 04 - How to install local packages
featured: true
-->

# How to Install Local Packages

<iframe src="https://www.youtube.com/embed/JDSfqFFbNYQ" frameborder="0" allowfullscreen></iframe>

There are two ways to install npm packages: locally or globally. Choose which kind of installation to use based on how you want to use the package.

* If you want to depend on the package from your own module, using something like Node.js' `require`, then you want to install locally. This is `npm install`'s default behavior. 
* If you want to use a package as a command line tool, (such as grunt CLI), then [install it globally](/getting-started/installing-npm-packages-globally).

To learn more about the `install` command, check out the [CLI doc page][1].

## Installing a Package

A package can be downloaded with the command:

```
> npm install <package_name>
```

This will create the `node_modules` directory in your current directory (if one doesn't exist yet)
and will download the package to that directory.

### Test:

To confirm that `npm install` worked correctly, check to see that a `node_modules` directory exists and that it contains a directory for the package(s) you installed.

### Example:

Install a package called `lodash`. Confirm that it ran successfully by listing the contents of the `node_modules` directory, where you should see a directory called `lodash`.

#### Microsoft Windows:

```
C:\ npm install lodash
C:\ dir node_modules

#=> lodash
```
#### macOS, Ubuntu, Debian

```
> npm install lodash
> ls node_modules             

#=> lodash
```

## Which Version of the Package is Installed?

If there is no `package.json` file in the local directory, the latest version of the package is installed.

If there is a `package.json` file, npm installs the latest version that satisfies the [semver rule][2] declared in `package.json`.

## Using the Installed Package in Your Code

Once the package is in `node_modules`, you can use it in your code. For example, if you are creating a Node.js module, you can `require` it.

### Example:

Create a file named `index.js`, with the following code:

```javascript
// index.js
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
```

Run the code using `node index.js`. It should output `[2, 3]`.

If you had not properly installed `lodash`, you would receive this error:

```
module.js:340
    throw err;
          ^
Error: Cannot find module 'lodash'
```

To fix this, run `npm install lodash` in the same directory as your `index.js`.

[1]: /cli/install
[2]: /getting-started/semantic-versioning
