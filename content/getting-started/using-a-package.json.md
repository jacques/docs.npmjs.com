<!--
title: 05 - Using a `package.json`
featured: true
-->

# Using a `package.json`

The best way to manage locally installed npm packages is to create a
`package.json` file. 

A `package.json` file affords you a lot of great things:

1. It serves as documentation for what packages your project depends on
2. It allows you to specify the versions of a package that your project
can use using [semantic versioning rules][1]
3. Makes your build reproducable which means that its *way* easier
to share with other developers.

## Requirements

As a bare minimum, a `package.json` must have:

- `"name"`
  - all lowercase
  - one word, no spaces
  - dashes and underscores allowed
- `"version"`

For example:

```
{
  "name": "my-awesome-package",
  "version": "1.0.0"
}
```

## Creating a `package.json`

To create a `package.json` run:

```
> npm init
```

This will initate a command line questionaire that will conclude with the 
creation of a `package.json` in the directory you initiated the command.

### The `--yes` init flag

The extended CLI Q&A experience is not for everyone, and often if you are
comfortable with using a `package.json` you'd like a more expedited
experience. 

You can get a default `package.json` by running `npm init` with the `--yes`
or `-y` flag:

```
> npm init --yes
```

This will ask you only one question, `author`. Otherwise it will fill in default
values: 

```
> npm init --yes
Wrote to /home/ag_dubs/my_package/package.json:

{
  "name": "my_package",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "ag_dubs",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/ashleygwilliams/my_package.git"
  },
  "bugs": {
    "url": "https://github.com/ashleygwilliams/my_package/issues"
  },
  "homepage": "https://github.com/ashleygwilliams/my_package"
}
```

- `name`: defaults to author name unless in a `git` directory, in which case it
    will be the name of the repository
- `version`: always `1.0.0`
- `main`: always `index.js`
- `scripts`: by default creates a empty `test` script
- `keywords`: empty
- `author`: whatever you provided the CLI
- `license`: [`ISC`][2]
- `repository`: will pull in info from the current directory, if present
- `bugs`: will pull in info from the current directory, if present
- `homepage`: will pull in info from the current directory, if present

You can also set several config options for the init command. Some useful ones:


```
> npm set init.author.email "wombat@npmjs.com"
> npm set init.author.name "ag_dubs"
> npm set init.license "MIT"
```

## Specifying Packages

To specify the packages your project depends on, you need to 
list the packages you'd like to use in your `package.json` file. There are
2 types of packages you can list:

- `"dependencies"`: these packages are required by your application in production
- `"devDependencies"`: these packages are only needed for development and testing

### Manually editing your `package.json`

You can manually edit your `package.json`. You'll need to create an attribute
in the package object called `dependencies` that points to an object. This object
will hold attributes named after the packages you'd like to use, that point to a 
[semver][1] expression that specifies what versions of that project are 
compatible with your project.

If you have dependencies you only need to use during local development, you will
follow the same instructions as above but in an attribute called `devDependencies`.

For example: The project below uses any version of the package `my_dep` that matches
major version 1 in production, and requires any version of the package `my_test_framework`
that matches major version 3, but only for development:

```
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
    "my_dep": "^1.0.0"
  },
  "devDependencies" : {
    "my_test_framework": "^3.1.0"
  }
}
```

### The `--save` and `--save-dev` install flags

The easier (and more awesome) way to add dependencies to your `package.json` is to do
so from the command line, flagging the `npm install` command with either `--save` or
`--save-dev`, depending on how you'd like to use that dependency.

To add an entry to your `package.json`'s `dependencies`:

```
npm install <package_name> --save
```

To add an entry to your `package.json`'s `devDependencies`:

```
npm install <package_name> --save-dev
```

## Managing dependency versions 

npm uses Semantic Versioning, or, as we often refer to it, SemVer, to manage versions
and ranges of versions of packages.

If you have a `package.json` file in your directory and you run
`npm install`, then npm will look at the dependencies that are listed in
that file and download the latest versions satisfying [semver rules][1]
for all of those.

To learn more about semantic versioning, check out our [Getting Started "Semver" page][1].

[1]: /getting-started/semantic-versioning
[2]: https://opensource.org/licenses/ISC
