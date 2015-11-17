<!--
title: 07 - Pre-Existing Packages
featured: true
-->

# Manage Team Access To Previously Existing Packages

## Restrictions

Currently, it is not possible to change the scope of a pre-existing
public or private, scoped or not, package to an Organization.

Specifically, given a private, scoped package `@ag_dubs/foo`,
there is currently no way to make that exact package scoped to
the Organization, `@ag_org`, i.e. `@ag_org/foo` without creating
a new package.

However, it is possible for a [Super Admin] or [Team Admin] with
write access to a scoped package to grant team access to that
package.

Note: To manage access to unscoped packages, you must use the 
[Organization Dashboard] in the web interface.

Note: It is possible to migrate a User scope to an Organization scope.
For more information on that check out the
[Migrating a Current User Scope to an Org][1] in the [Creating an Org
documentation][2].

## Granting Team Access to a Package

So, let's say you have a package `@ag_dubs/foo` that you would like to
collaborate on within the Organization `@ag_org`.

First, ensure that you have the correct permissions. The user must:
- Be a [Super Admin] or [Team Admin] in the Organization
- Have write-acess to the package, `@ag_dubs/foo`

Then, you can [grant team access to a package][3], as though it were scoped
to the Organization:

```
> > npm access grant <read-only|read-write> <org:team> @ag_dubs/foo
```

[Super Admin]: /orgs/roles#super-admin
[Team Admin]: /orgs/roles#team-admin
[1]: /orgs/setup#migrating-an-existing-username-to-an-org
[2]: /orgs/setup
[3]: /orgs/package-access#granting-access
[Organization Dashboard]: /orgs/setup#organization-dashboard
