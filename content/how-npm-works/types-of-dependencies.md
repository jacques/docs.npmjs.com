<!--
title: 06 - Types of Dependencies
featured: true
-->

# Types of Dependencies

Most people who use npm use it to install packages that their applications
depend one, known familiarly as `dependencies`. What a lot of people don't
know is that there's actually a vibrant array of different dependency types
(ok, fine, just 5ish) that can help you better serve yourself, as either an
application or package author, as well as the users of your package. 

Before now it was a little tricky to learn what those dependency types are, 
what differentiates them, and why you'd want to use them. This article will
hopefully make that a bit more clear.

So without further ado, let's introduce the dependency types!

## `dependencies`

Here's the dependency type that we all know and love. All packages listed as
`dependencies` are installed on `npm install`, regardless of environment.
When someone else installs your package, these dependencies are installed
when the CLI calls `npm install`, which is to say they aren't included in 
the package tarball that is originally fetched. 

Something that a lot of people don't realize is that `dependencies` (of any
type actually!) don't have to be from the npm (or any other) registry. You
can also include links to tarballs, or git urls! For example:

```json
{
  "dependencies": {
    "mod-a": "^1.0.0",
    "mod-b": "git@github.com:ashleygwilliams/module-B.git",
    "mod-c": "http://path.to/mod-c.tar.gz",
    "mod-d": "./path/to/mod-d.tar.gz"
  }
}
```

### transitive dependencies?

When discussing package management, you'll almost always hear the term
"transitive dependencies" used, yet you'd never find it in a `package.json`
or even documentation (until now!). "Transitive dependencies" is the term
people use to describe dependencies (of any type) of dependencies (of any
type). You could use it in a sentence like so: "The way npm manages
transitive dependencies changed between npm2 and npm3".

## `devDependencies`

`devDependencies` are very similar to `dependencies`, with a one caveat:

These dependencies are not installed if you have `NODE_ENV` set to
`production`. This is a default on sites like Heroku, so if you need certain
depedencies to run your package in production, you'll want to make sure that
those dependencies are set as `dependencies`, or set your `NODE_ENV` to 
`development`.

A neat thing that many don't know about `devDependencies` is that they are
automatically added to the `PATH` that npm scripts use. So no need to type
`node_modules/`, you can use the commands that your `devDependencies` export
just as if you were using them in the terminal! For example:

```json
{
  "scripts": {
    "start": "live-server ."
  },
  "devDependencies": {
    "live-server": "^1.0.0"
  }
}
```

## `optionalDependencies`

This type of dependency has a clear implementation but somewhat more obscure
usecases, so let's start with how it works, and then talk about why you
might want to use them.

`optionalDependencies` are a type of dependency that, when they fail, won't 
make your `npm install` fail. When you type `npm install`, npm will try to
install these dependencies just like `dependencies`, with the distinction
that if one or more fail to install, the CLI will **not** report that the
`npm install` failed.

So why would you want this?

### native dependencies

To explain, we first need to recognized that while *many* packages on npm
are written in NodeJS, or at least JavaScript- many are also written in 
neither and/or depend on other languages to work. One langauge that is
particularly common in non-JS packages is C, and packages that contain C are
often referred to as "native dependencies". We use the word native because
how C is compiled is dependent on the C compiler that the computer that is
running the code has. Not all computers have the same one! Because of this,
you'll need to include a different native dependency for all the computers
you want to support. For example:

```json
{
  "optionalDependencies": {
    "this-one-makes-binaries-for-linux": "~2.1.3",
    "im-the-one-for-OSX": "^3.0.0",
    "windows-builder": "5.9.8"
  }
}
```

In this scenario, an `npm install` would attempt to install all 3 on all 3
platforms, but only one would succeed each time. Because these are listed as
`optionalDependencies`, when the 2 that are supposed to fail, do, indeed
fail, the entire `npm install` is not considered to have errored out, but to
have finished successfully.

So native dependencies are one good example of using `optionalDependencies`.
There are others too! The main thing to remember is that a failure to
install any/all of the dependencies in `optionalDependencies` will not
result in `npm install` failing- so make sure that the dependencies you list
are *really* optional! (NOTE: If you `require` them, make sure you account
for the case when they might not be present!)

## `peerDependencies`

WARNING: This one's a bit controversial.

`peerDependencies` are designed for the usecase where you are writing a
package as a plugin for a framework or library ecosystem. Let's say, for
example, you'd like to write a plugin for Angular. Your package doesn't
necessarily *depend* on Angular, but it only works with certain versions,
and you need Angular to test that your plug-in package works. You can signal
to your users that your package works with X versions of Angular by defining
Angular as a `peerDependency`, e.g.:

```json
{
  "name": "angular-drop-down",
  "peerDependencies": {
    "angular": "^2.0.0"
  }
}
```

Ok, so where's the controversy you ask? It's at the border of npm2 and npm3.
The convtroversy is that the default installation (or in this case,
non-installation) of `peerDependencies` was changed in order to grant app
developers more control in npm3. In npm2, `peerDependencies` were installed
on `npm install`; In npm3, they are not installed, and a warning is printed:

```sh
$ npm install
npm WARN angular-drop-down@ requires a peer of angular@^2.0.0 but none was installed.
```

If you see this warning, you'll need to run `npm install angular@2.0.0` to
fix it. You'll probably want to `--save` as well :)

Another thing that makes this a controversial dependency type is that there
is a reasonable argument that you shouldn't need to include 
`peerDepedencies` at all. That is to say, when designing plugins, you should
do so in a way that has a clean compatible interface that can exist 
independently of the framework it is meant to be used with. For more info,
 npm's CEO Isaac explained his plugin design philosophy in 
[this issue](https://github.com/npm/npm/issues/5080#issuecomment-40553859).

Mostly, use `peerDependencies` if you want to communicate to your users that
your package is a plugin for an ecosystem and that in order to work it
requires a specific version of a specific library or framework. When writing
the documentation for a package that has `peerDependencies`, you'll probably
want to mention that your users will see a warning when they `npm install`,
and then explain to them how to fix it :)

## `bundledDependencies`

Our fifth, and final, type of dependency isn't actually a type of dependency
at all, though it's name could easily lead you to think that. Instead,
`bundledDependencies`, contain a list of dependencies that are already
categorized as another type, and instruct npm, at `publish` to pack the
dependency's code (and it's dependencies' code, etc.) into the tarball that 
gets published to the npm registry.

To use `bundledDependencies`, add a key to your `package.json` file called 
`bundledDependencies` (`bundleDependencies` also works), and point it to an
array of strings that represent dependency names. These dependencies should
be listed as a dependency somewhere else in your `package.json`, the type
doesn't matter, just so long as it is present. For example:

```json
{
  "dependencies" : {
    "mod-a": "^1.0.0",
    "mod-b": "^1.0.0"
  },
  "optionalDependencies": {
    "mod-c": "^1.0.0"
  },
  "bundledDependencies" : ["mod-a", "mod-c"]
}
```

## moar dependency types?

Many of ya'll have requested even more types of dependencies to further
improve your dependency management and workflows. We hear ya! To officially
support new types is tough for the CLI team, but that doesn't mean you can't
experiment now. We commonly see requests for a `browser` or 
`browserDepenedencies` type, and there are a few specs out in the wild right
now, such as [this one](https://github.com/defunctzombie/package-browser-field-spec).

## conclusion

And there we have it! A bunch of definitions for a bunch of dependency types
- hopefully you learned something new. As always, if you have any questions 
or comments, please open an issue!
