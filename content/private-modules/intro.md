<!--
title: 01 - Working with private packages
featured: true
-->

# Working with private packages


_To use private packages, you must run a version of npm greater than `2.7.0`. You also must be a paid npm user._

With npm private packages, you can use the npm registry to host your own private code and the npm command line to manage it. This makes it easy to use public packages like Express and Browserify side-by-side with your own private code.

<iframe src="https://www.youtube.com/embed/O6JoXGnHK_Y" frameborder="0" allowfullscreen></iframe>

## Before we start

Log in to npm again after upgrading to the most recent version. 

```sh
npm install -g npm
npm login
```

## Setting up your package

All private packages are scoped.

If a package's name begins with `@`, then it is a scoped package. The scope is everything in between the `@` and the slash.

```
@scope/project-name
```

When you sign up for private modules as an individual user, your scope is your username. If you create an npm Org, the orgname can be the scope. Orgs can be free or paid. Using a public Org is the only free way to use scopes in package names. 

```
@username/project-name
@orgname/project-name
```

If you use `npm init` to initialize your packages, you can pass in your scope like this:

```
npm init --scope=<your_scope>
```

If you use the same scope most of the time, you'll probably want to set it in your default configuration instead.

```
npm config set scope <your_scope>
```

## Publishing your package

Publishing your package is easy.

```
npm publish
```

By default, scoped packages are published as private. You can read more about this in the [scopes documentation](/getting-started/scoped-packages).

Once it's published, you should see it on the website with a private flag.

<img src="\images\private-package.png" style="border: 1px solid gray;">

## Sharing access from the web

If you want to give access to someone, they need to be subscribed to private packages as well. Once they are, you can give them read or read-write access. Or, you can set up an npm Org to give them access through Orgs and teams. Please refer to the online npm Orgs book for details. 

To give someone access without using an org, navigate to the package page. You can find it at:

`https://www.npmjs.com/package/your-package-name`

<img src="\images\package-page-invite-collaborator.png" style="border: 1px solid gray;">

To control access to the package click the `+` button under `Collaborators` .

<img src="\images\invite-maintainer.png" style="border: 1px solid gray;">

Add the appropriate username, then click `Submit`. 


## Sharing access from the CLI
You can also add collaborators on the command line:

```sh
npm owner add <user> <package name>
```

## Installing private packages

To install a private packages, you must have access to the package. Then you can use install with the scoped package name.

```
npm install @scope/project-name
```

You also use the scoped package name when requiring it.

```
var project = require('@scope/project-name')

```

## Working with Org Scopes

Please refer to the Orgs book for details about how to create and assign teams, and work with Orgs scopes. 

## Switching from private to public

All scoped packages default to private. This ensures that you don't make something public by accident. You can change this on the access page.

<img src="\images\convert-private-to-public.png" style="border: 1px solid gray;">

You can also manage package access via the command line:

```sh
npm access restricted <package_name>
```

The package will be removed from listings on the site within a few minutes of making it private.
