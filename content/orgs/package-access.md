<!--
title: 06 - Package Access
featured: true
-->

# Managing Package Access

Once you have scoped a package to your Organization, users with 
[Super Admin] or [Team Admin] roles in your Organization can
[grant][1], [revoke][2], and [monitor][3] team access to that
package.

## Restrictions

Currently, one can only manage access to scoped packages via the CLI
[`npm access`] command. If you would like to manage access to a unscoped,
public package, you must use the [Organization Dashboard][4] in the
web interface.

## Access Levels 

There are two levels of access you can provide:
- read-only: can use the package, e.g. `npm install`
- read-write: can update the package, e.g. `npm publish`

## Granting Access

To grant access to a team, a [Team Admin] can type:
 
```
> npm access grant <read-only|read-write> <org:team> [<package>]
```

The `grant` command takes 3 arguments, in order:
  - access level: `read-only` or `read-write`
  - scope: `<org:team>`, e.g. `npminc:wombats`
  - package: the name of a package
    The package must be:
      - [scoped to the Organization][5], or
      - be scoped package that a [Super Admin] or [Team Admin] has
        write-access to
    **Package name is optional if you are executing the command in a
    directory with a [`package.json`].**


For example, to  grant read-write access the `npm-docs` package to
the `@npminc` org's `wombats` team, a user who:
  - is a [Super Admin] or [Team Admin] for the Organization
  - has write access to the `npm-docs` package

...would do the following:

```
> npm access grant read-write npminc:wombats npm-docs
```

## Revoking Access

To revoke team access to a package, a [Team Admin] can type:

```
> npm access revoke <org:team> [<package>]
```

Again, the `package` argument is optional if this command is
executed in a directory containing a [`package.json`].

## Monitor Access

You can check whether you have successfully granted or revoked
team access to a package using the `npm access ls-packages` and
`npm access ls-collaborators` command.

### View a Team Member's Package Access
```
npm access ls-packages <org> <user>
```

### View a Team's Package Access
```
npm access ls-packages <org:team>
```

### List Teams with Access to a Package
```
npm access ls-collaborators <pkg>
```

[Team Admin]: /orgs/roles#team-admin
[Super Admin]: /orgs/roles#super-admin
[1]: #granting-access
[2]: #revoking-access
[3]: #monitor-access
[4]: /orgs/setup#organization-dashboard
[5]: /orgs/scoping-packages
[`npm access`]: /cli/npm-access
[`package.json`]: /files/package.json
