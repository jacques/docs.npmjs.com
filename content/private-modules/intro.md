<!--
title: 01 - Working with private modules
featured: true
-->

# Working with private modules

With npm private modules, you can use the npm registry to host your own private code and the npm command line to manage it. This makes it easy to use public modules like Express and Browserify side-by-side with your own private code.

<iframe src="//www.youtube.com/embed/O6JoXGnHK_Y" frameborder="0" allowfullscreen></iframe>

## Before we start

You need a version of npm greater than `2.7.0`, and you'll need to log in to npm again.

```sh
sudo npm install -g npm
npm login
```

## Setting up your package

All private packages are scoped.

Scopes are a new feature of npm. If a package's name begins with `@`, then it is a scoped package. The scope is everything in between the `@` and the slash.

```
@scope/project-name
```

When you sign up for private modules as an individual user, your scope is your username.

```
@username/project-name
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

<p class="centered">
  <img src="/images/private-modules/private-flag.png" class="bordered">
</p>

## Giving access to others

If you want to give access to someone, they need to be subscribed to private modules as well. Once they are, you can give them read or read-write access.

You can control access to the package on the access page. To get to the page, click on the Collaborators link or the plus button.

<p class="centered">
  <img src="http://npmblog-images.surge.sh/static-pages/collaborators-page.png" class="bordered">
</p>

Add collaborators by entering the username and hitting enter.

<p class="centered">
  <img src="http://npmblog-images.surge.sh/static-pages/add-collaborator.gif" class="bordered">
</p>

You can also add collaborators on the command line:

```sh
npm owner add <user> <package name>
```

## Installing private modules

To install a private module, you must have access to the package. Then you can use install with the scoped package name.

```
npm install @scope/project-name
```

You also use the scoped package name when requiring it.

```
var project = require('@scope/project-name')
```

## Switching from private to public

All scoped packages default to private. This ensures that you don't make something public by accident. You can change this on the access page.

<p class="centered">
  <img src="http://npmblog-images.surge.sh/static-pages/make-private-ui.gif" class="bordered">
</p>

You can also manage package access via the command:

```sh
npm access restricted <package_name>
```

The package will be removed from listings on the site within a few minutes of making it private.
