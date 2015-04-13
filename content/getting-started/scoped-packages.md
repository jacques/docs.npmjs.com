Scopes are like namespaces for npm modules. Each npm user has their own scope.

```
@username/project-name
```

## Initializing a scoped package

To create a scoped package, you simply use a package name that starts with your scope.

```
// package.json
{
  "name": "@username/project-name"
}
```

If you use `npm init`, you can add your scope as an option to that command.

```
$ npm init --scope=username
```

## Using a scoped package

To use a scoped package, you simply include the scope wherever you use the package name.

```
// package.json
{
  "dependencies": {
    "@username/project-name": "1.0.0"
  }
}
```

```
// index.js
var project-name = require("@username/project-name")
```
