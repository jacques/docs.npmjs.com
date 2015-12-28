# npm Private Modules
## Publish, share and install proprietary code easily

[Private modules](https://www.npmjs.com/npm/private-packages) are ordinary npm packages that only you, and people you select,
can view, install, and publish. You publish them in your namespace or your team's namespace, just by giving them a name in package.json:

```json
{
  "name": "@myuser/mypackage"
}
```

You publish them with `npm publish`, just like any other package, and you install
them by name:

```sh
npm install @myuser/mypackage
```

Once installed, use them by requiring them by name, just like any package:

```js
var mypackage = require('@myuser/mypackage');
```

## Re-use your code

You re-use code between projects. npm and the registry make it really easy to
share small modules of useful code with the world. But sometimes the code in that
package is private, or sensitive, or just too specific to your needs for you to
want to publish it to the public registry. Private packages are great for this.

## Share proprietary code

You work in a team, or you work for clients. You want to be able to easily share
your work, with the dependency management and version management that npm provides.
By making it easy and granular to select who can see, install and publish packages,
[private packages](https://www.npmjs.com/npm/private-packages) make this easy.

