# Publishing an Org Scoped Package

One of the great benefits of using an Organization is that you can
publish packages, publicly or privately, under a shared namespace,
called the **Organization scope**. This is similar to a user 
namespace, or **user scope**, however an Organization scope makes
it much easier to manage package access for multiple packages and
multiple users.

This page will teach you how to publish an Organization scoped package,
both publicly and privately. This page will also teach you how to
configure your npm so that it automatically creates packages with your
Organization scope.

Don't forget that all members of an Organization are immediately added
to a Developers team that automatically has read/write access to all
packages published under an Organization scope. 
([Learn more about the Developers team])

<hr/>

## Creating a New Scoped Package

To create a new scoped package for your Organization scope, create
a directory with the name of the package you would like to create.
Navigate into that directory and use this command:

```
npm init --scope=<org_scope>
```

To verify that this worked, open the generated `package.json` with an
editor of your choice. You should see that the name of the package
will be `@org_scope/<pkg_name>`.

## Publishing a Private Scoped Package

By default, `npm publish` will publish a scoped package as private.
Therefore, to privately publish a scoped package as private, type:

```
npm publish
```

[Learn more about the CLI `publish` command].

You can verify that this worked by going to your npm profile or your
Organization's profile and look at the packages list. You should see
your newly published package listed there. You will know it is private
because there will be a small lock icon next to the package name.

## Publishing a Public Scoped Package

By default all scoped packages are published privately. To publish a
scoped package publicly, pass the `access` flag with the value 
`public`:

```
npm publish --access public
```

[Learn more about the CLI `publish` command].

You can verify that this worked by going to your npm profile or your
Organization's profile and look at the packages list. You should see
your newly published package listed there. You will know it is public
because there will *not* be a small lock icon next to the package name.

You can doubly verify this by opening a private browser tab and 
viewing your npm profile or your Organization's profile. The package
should be present on both package listings.

[Learn more about the Developers Team]: the-developers-team.md
[Learn more about the CLI `publish` command]: https://docs.npmjs.com/cli/publish
