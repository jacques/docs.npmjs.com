<!--
title: 05 - Using a `package.json`
featured: true
-->

# Using a `package.json`

The best way to manage locally installed npm packages is to create a
`package.json` file. 

A `package.json` file offers you a lot of great things:

1. It serves as documentation for what packages your project depends on.
2. It allows you to specify the versions of a package that your project
can use using [semantic versioning rules][1].
3. It makes your build reproducible, which means that it's *much* easier
to share with other developers.

## Requirements

At a bare minimum, a `package.json` must have:

- `"name"`
  - all lowercase
  - one word, no spaces
  - dashes and underscores allowed
- `"version"`
  - in the form of `x.x.x`
  - follows [semver spec](https://docs.npmjs.com/getting-started/semantic-versioning)

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

This will initiate a command line questionnaire that will conclude with the 
creation of a `package.json` in the directory you initiated the command.

### The `--yes` init flag

The extended CLI Q&A experience is not for everyone, and if you are
comfortable with using a `package.json` you'd like a more expedited
experience. 

You can get a default `package.json` by running `npm init` with the `--yes`
or `-y` flag:

```
> npm init --yes
```

This will ask no questions, and instead will generate a default `package.json` using information extracted from the current directory.

```
> npm init --yes
Wrote to /home/ag_dubs/my_package/package.json:

{
  "name": "my_package",
  "description": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ashleygwilliams/my_package.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ashleygwilliams/my_package/issues"
  },
  "homepage": "https://github.com/ashleygwilliams/my_package"
}
```

- `name`: the current directory name
- `version`: always `1.0.0`
- `description`: info from the readme, else an empty string `""`
- `main`: always `index.js`
- `scripts`: by default creates a empty `test` script
- `keywords`: empty
- `author`: empty
- `license`: [`ISC`][2]
- `bugs`: info from the current directory, if present
- `homepage`: info from the current directory, if present

You can also set several config options for the init command. Some useful ones:


```
> npm set init.author.email "wombat@npmjs.com"
> npm set init.author.name "ag_dubs"
> npm set init.license "MIT"
```

#### NOTE:
If there is no description field in the `package.json`, npm uses the first line of the `README.md` or README instead. The description helps people find your package on npm search, so it's definitely useful to make a custom description in the `package.json` to make your package more discoverable.

### Customizing the `init` process

It is also possible to totally customize the information created and the questions asked during the init process. This is done by creating a custom `.npm-init.js`. By default, npm will look in your home directory.  `~/.npm-init.js`

A simple `.npm-init.js` could look something like this:

```
module.exports = {
  customField: 'Custom Field',
  otherCustomField: 'This field is really cool'
}
```

Running `npm init` with this file in your home directory would output a `package.json` similiar to this:

```
{
  customField: 'Custom Field',
  otherCustomField: 'This field is really cool'
}
```

Customizing the questions is also possible by using the `prompt` function.

```
  module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");
```

To learn more on how to create more advanced customizations, check out the docs for [init-package-json](https://github.com/npm/init-package-json)


## Specifying Packages

To specify the packages your project depends on, you need to 
list the packages you'd like to use in your `package.json` file. There are
2 types of packages you can list:

- `"dependencies"`: These packages are required by your application in production.
- `"devDependencies"`: These packages are only needed for development and testing.

### Manually editing your `package.json`

You can manually edit your `package.json`. You'll need to create an attribute
in the package object called `dependencies` that points to an object. This object
will hold attributes named after the packages you'd like to use and point to a 
[semver][1] expression that specifies what versions of that project are 
compatible with your project.

If you have dependencies you only need to use during local development, you will
follow the same instructions as above but in an attribute called `devDependencies`.

For example, the project below uses any version of the package `my_dep` that matches
major version 1 in production and requires any version of the package `my_test_framework`
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
`npm install`, npm will look at the dependencies that are listed in
that file and download the latest versions satisfying [semver rules][1]
for all of those.

To learn more about semantic versioning, check out our [Getting Started "Semver" page][1].

[1]: /getting-started/semantic-versioning
[2]: https://opensource.org/licenses/ISC
