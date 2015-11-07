<!--
title: 15 - Working with Organizations
featured: true
-->

# **Working with npm Organizations**
We are so excited to offer support for Organizations! Thank you for taking the time to be our first users.

The beta currently has a few limitations worth noting:
* You can only create and manage teams via the command-line npm client, not yet on the website. Only the Super-Admin can see the organization UI on the website. (The "collaborators" screen for a package will not allow you to modify package access for an org-owned package, since access must be handled by a team)
* Team admins cannot be modified once created. (Team admins have the ability to create new teams and add/remove users in the org to and from teams.)
* All of these limitations will be addressed over the course of the beta

## Migrating an existing username to an Org
Many users have already registered an npm user with the @scope they want to use for their org. If you attempt to register an org with a scope already in use, and you are already logged in as that user, you will be prompted to automatically migrate that user to an org.

Once your @scope is owned by an org, **you can no longer log in as your former username**. Orgs are not users and do not have usernames and passwords. During migration, you will be prompted to pick a new username. This new user will have the same password as your old user, but all packages that belonged to your old user will now belong to the org. Your new user will have Super-Admin privileges to the org.

## **Step 0)** Provide your username
* The feature is whitelisted, so you need to provide the name of an existing npm user to be admin
* Reply to your invitation email from Laurie, providing the username
* This restriction applies only during the beta

## **Step 1)** Sign-up for Orgs
* Follow this [link](https://www.npmjs.com/org?join-beta)
* Login with the username you gave Laurie
* Give a human-readable name to your org, e.g "npm, Inc."
* Name your org scope, e.g. @npminc
* Click ‘make it so’ button to proceed to the next page
* Add team members (by their npm username) to your org

## **Step 2)**  Team Admins create teams
* Check who you’ve added to your org:
```
npm team ls <org>:developers
```
* Each org is automatically given a "developers" team, so you can see the whole list of team members in your org. This team gets access to all packages, but you can edit that with the `access` command.
* Create a new team:
```
npm team create <org:team>
```
* Add members to that team:
```
npm team add <org:team> <user>
```

## **Step 3)** Publish a package and adjust package access via CLI
* In package directory, run
```
npm init --scope=<org>
```
to scope it for your org & publish as usual
* Team admins can now set package access.
* Grant access:  
```
npm access grant <read-only|read-write> <org:team> [<package>]
```
* Revoke access:
```
npm access revoke <org:team> [<package>]
```

## **Step 4)** Monitor your package access
* See what org packages a team member can access:
```
npm access ls-packages <org> <user>
```
* See packages available to a specific team:
```
npm access ls-packages <org:team>
```
* Check which teams are collaborating on a package:
```
npm access ls-collaborators <pkg>
```
## **Step 5)** Enjoy how much easier your job has become thanks to npm Organization support!
