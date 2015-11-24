<!--
title: 04 - Teams
featured: true
-->

# Teams

The key to managing access to packages via Organizations
is Teams.

## What are Teams?

Teams are sets of users that have access to a certain scope
within the Organization.

In order to create teams and manage team membership, you must be
a [Super Admin] or [Team Admin] under the given organization. Listing
teams and team memberships may be done by any member of the
organization.

Organization creation and management of [Team Admin] and [Team
Member] roles is done through the web interface.

## The `developers` Team

When you first create an Organization, a team called `developers`
is created. This team contains all the people you have added to
your Organization.

** Please do NOT delete your developers team. This will break your account and
you will need to contact support@npmjs.com. The npmjs team is currently working
on a fix for this, which will be available soon.**

A [Super Admin] can check who has been added to an organization: 

```
> npm team ls <org>:developers
```
...where `<org>` is the name of the Organization, e.g. `@npminc`.

## Creating Teams

A [Super Admin] or [Team Admin] has the ability to create a team.
To create a team one can type:

```
> npm team create <org:team>
```
...where `<org:team>` is the name of the Organization, followed by
the name of the new team. 

For example, to create a team called `wombats` in the `@npminc`
Organization, a [Super Admin] or [Team Admin] would type:
```
> npm team create npminc:wombats
```

You can check that you created the team successfully by listing the
teams in your Organization. You can do that by typing:

```
> npm team ls <org>
```

or by visiting the [Organization Dashboard] in the [web interface].

## Adding Users to a Team

Once you've created a team you'll want to add users to it. To do
so a [Super Admin] or [Team Admin] can type:

```
> npm team add <org:team> <user>
```
...where <org:team> is the name of the Organization, followed by
the name of the team and <user> is the npm username of the user you'd
like to make a member of the team.

For example, to make the npm user `ag_dubs` a member of the `@npminc`
organization's `wombats` team:
```
> npm team add npminc:wombats ag_dubs
```

To check if you've added a user successfully, you can list all the
users on a particular team. To do so, type:

```
> npm team ls <org:team>
```

## Removing a User from a Team

```
> npm team rm <org:team> <user>
```

## Listing Teams and Team Members

### List an Organization's Teams

```
> npm team ls <org>
```

### List a Team's Members
```
> npm team ls <org:team>
```

### List Teams a Member Belongs to
```
> npm team ls <org> <user>
```

## CLI Documentation

For detailed information on the `team` command, check out the CLI
documentation [here](cli/team).

[Organization Dashboard]: /orgs/setup#organization-dashboard
[Super Admin]: /orgs/roles#super-admin
[Team Admin]: /orgs/roles#team-admin
[Team Member]: /orgs/roles#member
