<!--
title: 14 - How to work with scoped packages
featured: true
-->

# How to Work with Scoped Packages
*Requires npm version 2 or greater*

Scopes are used to group related packages together, and to create a namespace, like a domain, for npm modules. This is explained in more detail [here](https://docs.npmjs.com/cli/version).

If a package's name begins with `@`, then it is a **scoped package**. The scope is everything in between the `@` and the slash.

```
@scope/project-name
```

Each npm user has their own scope.

```
@username/project-name
```
You can find more in depth information about scopes in the [CLI documentation](https://docs.npmjs.com/misc/scope#publishing-public-scoped-packages-to-the-public-npm-registry).

## How to Initialize a Scoped Package

To create a scoped package, you simply use a package name that starts with your scope.

```json
{
  "name": "@username/project-name"
}
```

If you use `npm init`, you can add your scope as an option to that command.

```
npm init --scope=username
```

If you use the same scope all the time, you will probably want to set this option in your [`.npmrc`](https://docs.npmjs.com/files/npmrc) file.

```
npm config set scope username
```

## Publishing a Scoped Package

By default, scoped packages are private. To publish private modules, you need to be a paid [private modules](https://www.npmjs.com/private-modules) user.

Public scoped modules are free and don't require a paid subscription. To publish a public scoped module, set the access option when publishing it. This option will remain set for all subsequent publishes.

```
npm publish --access=public
```

## Using a Scoped Package

To use a scoped package, simply include the scope wherever you use the package name.

In `package.json`:

```json
{
  "dependencies": {
    "@username/project-name": "^1.0.0"
  }
}
```

On the command line:

```sh
npm install @username/project-name --save
```

In a `require` statement:

```js
var projectName = require("@username/project-name")
```

For information about using scoped private modules, visit [npmjs.com/private-modules](https://www.npmjs.com/private-modules).
