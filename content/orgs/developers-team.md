<!--
title: 04 - The Developers Team
featured: true
-->

# The Developers Team

When you first create an Organization, a team called `developers` is created.

The `developers` team is a **special team**. While it can be deleted 
[if you so choose][#removing-the-developers-team], by default it acts as a "catch-all" 
team. This means:

  - new Organization members will be added to the `developers` team by default
  - the `developers` team has write access to all new Organization-scope package publishes
 
The effects of deleting the team are [covered below][#removing-the-developers-team].

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

[Super Admin]: /orgs/roles#super-admin
