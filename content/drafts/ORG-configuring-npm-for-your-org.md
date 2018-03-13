# Configuring npm for Your Org

The npm CLI is configurable! [Learn more about configuring npm].

This page will teach you how to configure your npm for your 
Organization's scope and plan. Specifically, it will show you:

- How to make all new packages default to your Organization's scope. 
- How to make all new packages have a default access, either public or 
  private.

In order to configure your npm, you'll need npm installed. If you need
help installing npm, check out this [doc][1].

<hr/>

## Configuring npm for Your Scope

If you intend on publishing packages with your Organization scope more
often than not, you may want to add your Organization scope to your
global `.npmrc` file. [Learn more about the `.npmrc` file].

To set your Organization scope globally for your instance of the npm
CLI, use this command:

```
npm config set scope <org_scope> --global
```

If you'd like to do it for a single package, remove the `--global`
flag. [Learn more about the CLI `config` command].

Once you issue this command, all packages that you create with 
`npm init` will be scoped to your Organization scope. 

To verify this, create a new package with `npm init`. Open the
generated `package.json` and view the `name` property. If you 
successfully configured npm, you should see your Organization's
scope preceding the packages name in the `name` property.

For packages you do not want to publish with the Organization's
scope, you can manually edit the generated `package.json`, removing
the Organization scope from the `name` field.

## Configuring npm for Your Org Plan

By default, any scoped package is published as private. However, if you have
an Org that does not have the Private Packages feature, `npm publish` will
fail unless you pass the `access` flag.
([Learn more about publishing scoped packages]).

This can be tedious if you have to do it all the time. If you know that a 
package will be public, you can set this in your per package `.npmrc` by
issuing the following command:

```
npm config set access public
```

This command will pass `--access public` to every `npm publish` command that
you issue for that package. You can also set this globally, similar to the
above example about setting scope, by passing the `--global` flag to the command.

Setting the `access` property in your global `.npmrc` will affect all packages,
including packages that are scoped to your Organization, as well as your personal
user scope.

Be careful with this! You don't want to accidentally publish a private package
as a public one.

[1]: https://www.npmjs.com/get-npm
[Learn more about the `.npmrc` file]: https://docs.npmjs.com/files/npmrc
[Learn more about the CLI `config` command]: https://docs.npmjs.com/cli/config
[Learn more about configuring npm]: https://docs.npmjs.com/misc/config
[Learn more about publishing scoped packages]: publishing-an-org-scoped-package.md
