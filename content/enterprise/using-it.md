<!--
order: 4
title: Using npm Enterprise
-->

# Private, scoped modules

Lots of companies using Node.js love the "many small modules" pattern that is
part of the Node culture. However, splitting internal applications and private
code up into small modules has been inconvenient, requiring git dependencies or
other workarounds to avoid publishing sensitive code to the public registry.
npm Enterprise makes private modules a first-class citizen.

## Get the latest npm client

npm Enterprise requires a 2.x+ version of the npm client. You can get this
by running

```sh
[sudo] npm install npm -g
 ```

## Authenticating

Once you have an up-to-date client, log in to your registry using your
GitHub or GitHub Enterprise credentials:

```sh
npm login --registry=http://myreg.mycompany.com:8080 --scope=@myco
```

## Installing

Now you can install private modules without any additional work, the same way
you do with public modules:

```sh
npm install @myco/somepackage
```

## Requiring

npm automatically knows that any package with the @myco scope should be
installed from your npm Enterprise installation. Scoped packages will be installed into
your `node_modules` folder and can be used in your JavaScript just like any
other module:

```js
require('@myco/somepackage');
```

## Publishing

Publishing private modules is similarly easy. Simply give your package
name a scope in package.json:

```json
{
  "name": "@myco/anypackage"
}
```

Then publish as usual:

```sh
npm publish
```

npm will automatically publish to your npm Enterprise, and will refuse to publish scoped
packages to the public registry.
