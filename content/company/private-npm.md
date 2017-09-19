# npm Private Modules
## Publish, share and install proprietary code easily

[Private modules](https://www.npmjs.com/npm/private-packages) are ordinary npm packages that only you, and people you select,
can view, install, and publish. You publish them in your namespace or your team's namespace by giving them a name in package.json:

```json
{
  "name": "@myuser/mypackage"
}
```

You publish them with `npm publish` just like any other package, and you install
them by name:

```sh
npm install @myuser/mypackage
```

Once installed, use them by requiring them by name, just like any other package:

```js
var mypackage = require('@myuser/mypackage');
```

## Re-use your code

npm and the registry make it easy to share small modules of useful code with the world. However, sometimes the code in your package is private, sensitive, or just too specific to your needs for you to
want to publish it to the public registry. Private packages allow you to share your code with a specific set of users, rather than the registry as a whole.

## Share proprietary code

Whether you work in a team or you work for clients, you want to be able to privately share
your work using the dependency management and version management that npm provides.
By allowing you to control who can see, install and publish packages,
[private packages](https://www.npmjs.com/npm/private-packages) make this easy.

