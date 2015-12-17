<!--
title: 04 - The Developers Team
featured: true
-->

# The Developers Team

When you first create an Organization, a team called `developers`
is created. The purpose of this team is to contain the whole of
your Organization's members. When you add a member to your
Organization that user is automatically added to the developers team.

## Package Access

All members of an Organization's `developers` team automatically have
read/write access to all organization-scoped packages.

When a package scoped to the Organization is published, all
members `developers` team are set as the maintainers of the package.

## Removing the `developers` team

You may delete the developers team. If you do, newly added Organization
members will not be added to any teams by default. Additionally,
you will not be able to see all users in your org from the CLI, as
one can only view the members of a team via the CLI.

You should also note that upon publish, in the absence of a `developers`
team, it is difficult to determine who should be set as maintainers
of that package. npm will do its best to fallback to another 
Organization team that the publisher is a member of. This is not
predictable.

## Reinstating the `developers` team

If you've removed the developers team, but now want it back, you can
reinstate it by creating a new team called `developers` (case sensitive!).
You will need to add all current members of the Organization to the 
new `developers` team, but, going forward  all newly added Organization
members will be automatically added to the new `developers` team.

### Listing the members of your Organization

Assuming you have *not* deleted the developers team in your Organization,
A [Super Admin] can check who has been added to an organization using
the `team ls` command:

```
> npm team ls <org>:developers
```
...where `<org>` is the name of the Organization, e.g. `@npminc`.

[Super Admin]: http://localhost:5000/orgs/roles#super-admin
