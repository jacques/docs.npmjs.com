<!--
title: 14 - Working with Organizations
featured: true
-->

# **Working with npm Organizations**
We are so excited to offer support for Organizations! Thank you for taking the time to be our first users.

The beta currently has a few limitations worth noting:
* You can only create and manage teams via the command-line npm client, not yet on the website. Only the Super-Admin can see the organization UI on the website. (The "collaborators" screen for a package will not allow you to modify package access for an org-owned package, since access must be handled by a team)
* Team admins cannot be modified once created. (Team admins have the ability to create new teams and add/remove users in the org to and from teams.)
* There is not yet automatic migration from a user to an org. If you have a username reserved you would like to use as the @scope of your org, please email support and ask them to delete the user. The scope will then be available for you to register as an org.
* All of these limitations will be addressed over the course of the beta

## **Step 1)** Sign-up for Orgs
* follow this [link](www.npmjs.com/org?join-beta)
* login with the username you gave Laurie
* Give a human-readable name to your org, e.g "npm, Inc."
* then name your org scope, e.g. @npminc
* click ‘make it so’ button to proceed to the next page
* Add team members (by their npm username) to your org

## **Step 2)**  Team Admins create teams
* check who you’ve added to your org:
```
npm team ls <org>:developers
```
* each org automatically is given a "developers" team, so you can see the whole list of team members in your org. This team gets access to all packages.
* create a new team:
```
npm team create <org:team>
```
* add members to that team:
```
npm team add <org:team> <user>
```

## **Step 3)** Publish a package and adjust package access via CLI
* In package directory, run
```
npm init --scope=<org>
```
to scope it for your org & publish as usual
* Team admins: set package access.
* grant access:  
```
npm access grant <read-only|read-write> <org:team> [<package>]
```
* revoke access:
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
