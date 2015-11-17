<!--
title: 05 - Scoping New Packages
featured: true
-->

# Scoping a Package to your Organization

Once you have an Organization set up, you'll want to scope packages
to that Organization.

Users with [Super Admin], [Team Admin], and [Member] roles can 
perform this action.

## Scoping a New Package

To do this, run these commands in the root directory of your package:

```
> npm init --scope=<org>
> npm publish
```
... where `<org>` is the name of your Organization.

## Setting your Organization as Default Scope

If you are using Organizations, there is a good chance that you'll
be using the Organization scope regularly.

To save yourself some typing, you can set your Organization as your
default scope:

```
npm config set scope <org>
```
... where `<org>` is the name of your Organization.

[Super Admin]: /orgs/roles#super-admin
[Team Admin]: /orgs/roles#team-admin
[Member]: /orgs/roles#member
