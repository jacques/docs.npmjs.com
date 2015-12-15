<!--
title: 03 - Packages
featured: true
-->

# Packages and Modules

## What is a `package`?

A package is any of:

* a) a folder containing a program described by a package.json file
* b) a gzipped tarball containing (a)
* c) a url that resolves to (b)
* d) a `<name>@<version>` that is published on the registry with (c)
* e) a `<name>@<tag>` that points to (d)
* f) a `<name>` that has a "latest" tag satisfying (e)
* g) a `git` url that, when cloned, results in (a).

Even if you never publish your package, you can still get a lot of
benefits of using npm if you just want to write a node program (a), and
perhaps if you also want to be able to easily install it elsewhere
after packing it up into a tarball (b).

Git urls can be of the form:

    git://github.com/user/project.git#commit-ish
    git+ssh://user@hostname:project.git#commit-ish
    git+http://user@hostname/project/blah.git#commit-ish
    git+https://user@hostname/project/blah.git#commit-ish

The `commit-ish` can be any tag, sha, or branch which can be supplied as
an argument to `git checkout`.  The default is `master`.

## What is a `module`?

A module is anything that can be loaded with `require()` in a Node.js
program.  The following things are all examples of things that can be
loaded as modules:

* A folder with a `package.json` file containing a `main` field.
* A folder with an `index.js` file in it.
* A JavaScript file.

Most npm packages are modules, because they are libraries that you
load with `require`.  However, there's no requirement that an npm
package be a module!  Some only contain an executable command-line
interface, and don't provide a `main` field for use in Node programs.

Almost all npm packages (at least, those that are Node programs)
*contain* many modules within them (because every file they load with
`require()` is a module).

In the context of a Node program, the `module` is also the thing that
was loaded *from* a file.  For example, in the following program:

    var req = require('request')

we might say that "The variable `req` refers to the `request` module".

## So, why is it the "`node_modules`" folder, but "`package.json`" file?  Why not `node_packages` or `module.json`?

The `package.json` file defines the package.  (See "What is a
package?" above.)

The `node_modules` folder is the place Node.js looks for modules.
(See "What is a module?" above.)

For example, if you create a file at `node_modules/foo.js` and then
had a program that did `var f = require('foo.js')` then it would load
the module.  However, `foo.js` is not a "package" in this case,
because it does not have a package.json.

Alternatively, if you create a package which does not have an
`index.js` or a `"main"` field in the `package.json` file, then it is
not a module.  Even if it's installed in `node_modules`, it can't be
an argument to `require()`.
