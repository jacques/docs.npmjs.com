<!--
title: 01 - Working with private modules
featured: true
-->

# Working with private modules

Private modules make it possible for you to have control over who can download and publish packages.

## Publishing a private package

All private packages are scoped. Your paid access applies to your scope, which is your username with an `@` in front.

```
@username/project-name
````

Read more about [scopes](https://docs.npmjs.com/getting-started/scoped-packages).

## Giving access to others

The access page gives you control over access to your package. To get to it, go to your package page at `https://www.npmjs.com/package/@username/your-package/access`, or click on the Collaborators link on the package page.

<p class="centered">
  <img src="http://npmblog-images.surge.sh/static-pages/collaborators-page.png" class="bordered">
</p>

### Making a package private

All scoped packages default to restricted access. This ensures that you don't make something public by accident. You can change this on the access page.

<p class="centered">
  <img src="http://npmblog-images.surge.sh/static-pages/make-private-ui.gif" class="bordered">
</p>

You can also manage package access via the command:

```sh
npm access restricted <package_name>
```

The package will be removed from listings on the site within a few minutes of making it private.

### Adding collaborators to a project

Add collaborators by entering the username and hitting enter.

<p class="centered">
  <img src="http://npmblog-images.surge.sh/static-pages/add-collaborator.gif" class="bordered">
</p>

You can also add collaborators on the command line:

```sh
npm owner add <user> <package name>
```

### Changing collaborator access

If you want to give a user write access, change their access on the package page by clicking on `read-write`. You can remove collaborators by clicking on the X.

## Logging in

When you try to install a private package from the CLI, you might get an access error. You will need to run `npm login` once to update your `~/.npmrc` file before working with private packages.

## Organizations

Currently, private packages are only available for individual users, but support for organization accounts is coming soon. Feel free to create a user for your organization in the meantime, and we can upgrade it to an organization when support is here.
