<!--
title: 02 - A Short History of npm
featured: true
-->

# A Short History of npm

Node.js is the first language to be written with the expectation that one
be using a package manager.

## Node.js Module Loader

## Early Days

npm began as a personal project of now npm, Inc CEO, Isaac Schlueter.
Frustrated with [CommonJS], and inspired by packages manages from other
languages

In the early days of Node.js, people shared code using git repositories.
However, there were several problems with this strategy:

- Getting code into the right place
- Installing dependencies of that code
- Updating code and its dependencies

Before npm:

- clone this git repo: `https://github.com/fs-webdev/asset-manager`
- run `make`
- copy the file into your `.node_libraries` folder
- make sure you name it `asset-manager.js`
- make sure to pre-install
  - `async.js` `https://github.com/caolan/async *` + dependencies
  - `glob.js` `https://github.com/isaacs/node-glob *` + dependencies
  - `rimraf.js` `https://github.com/isaacs/rimraf *` + dependencies
  - `uglify-js.js` `https://github.com/mishoo/UglifyJS2 *` + dependencies
  - `less.js` `https://github.com/less/less.js *` + dependencies
- Confirm that you are using the latest version from Github
- Except for `glob.js`, in which case use the previous version. `0.4`

After npm:

- `npm install asset-manager`

## The npm Way

npm made several decisions that made it distinct from other package
managers at the time:

- eliminate dependency hell
- supporting semantic versioning

Lots of contemporary package managers accomplish both of these goals
now, but at the time

[CommonJS]: http://www.commonjs.org/
