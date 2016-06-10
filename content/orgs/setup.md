<!--
title: 02 - Setup
featured: true
-->

# Setting up an Organization

[Organizations][1] and [Organization membership][2] are
created in the [npm web interface][3].

## Creating an Organization

In order to create an Organization, you must be logged in as
a npm user with a verified email address. To create an npm user,
[click here][4]. There are 2 ways to create an organization:

- [New Scope][11]
- [Pre-existing User Scope][12]

### Create an Organization with a new scope: 

1. Log in to [http://www.npmjs.com/][5]
2. Visit [https://www.npmjs.com/org/create][3]
3. Click the big red button "Create an Organization" 

## Organization Dashboard

Once you've created an Organization, you can perform a wide variety
of tasks on your Organization Dashboard.

Your Organization Dashboard is located:
```
https://www.npmjs.com/org/<org>
```
...where `<org>` is the name of your Organization.

## Adding Members to an Organization

By default, your Organization is set up with a [developers team][8].
Whenever you add a new member to your Organization, they are automatically
added to the developers team.

You may delete the developers team. If you do, newly added Organization
members will not be added to any teams by default.

For more information about the developers team, see [Developers Team][8]

To add a member to your organization, you add them by their npm
username via the [Organization Dashboard][10].

## Creating Team Admins

As the creator of the Organization you are granted the role of
[Super Admin][13]. 

For more information about the [Super Admin][13] and [Team Admin][6] 
roles, checkout the [Roles][7] documentation.

## Migrating an existing username to an Org
Many users have already registered an npm user with the @scope they
want to use for their org. If you attempt to register an org with a
scope already in use, and you are already logged in as that user, you
will be prompted to automatically migrate that user to an org.

Once your @scope is owned by an org, **you can no longer log in as
your former username**. Orgs are not users and do not have usernames
and passwords. During migration, you will be prompted to pick a new
username. This new user will have the same password as your old user,
but all packages that belonged to your old user will now belong to the
org. Your new user will have Super-Admin privileges to the org.

[1]: #creating-an-organization
[2]: #adding-members-to-an-organization
[3]: https://www.npmjs.com/org/create
[4]: https://www.npmjs.com/signup
[5]: https://www.npmjs.com/login
[6]: /orgs/roles#team-admin
[7]: /orgs/roles
[8]: /orgs/developers-team
[9]: /orgs/teams
[10]: #organization-dashboard
[11]: #create-an-organization-with-a-new-scope
[12]: #migrating-an-existing-username-to-an-org
[13]: /orgs/roles#super-admin
