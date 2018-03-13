# Managing Package Access

The key to managing package access in an Organization is teams.
**Teams are sets of Organization members that have defined privileges
for a set of packages that are controlled by the Organization**.
This page will teach you how to create and manage the 
membership of your Organization's team from the web interface.

If you would like to manage the package access of your team from
the npm command line interface (CLI), you can use:

```
npm access
```

Learn more about `npm access` [here][2].

If you are looking for how to manage a team's membership, check
out [this doc][1].

You will need to have the **Owner** or **Admin** role to perform this
work. For more information on **roles**, check out the 
[Roles and Privileges doc].

<hr/>

To manage the package access of a team, navigate to your team's landing page.
You can find a list of your teams at `https://www.npmjs.com/org/<org_name>/teams`.

From this list, you can click the value in the "packages" column. 

- If the team has access to packages, this value will be the current package count. Clicking
  this value will bring you to the "Packages" tab for this team.
- If the team does not have any package access, this value will read "add packages".
  Clicking this value will bring you to the "Manage Package Access" page.

You can also navigate to your team page directly by pointing your browser at
`https://www.npmjs.com/org/<org_name>/teams/<team_name>`.

From there, click the "Teams" tab. You'll use this interface to manage the
package access of your team.

## Adding Package Access to a Team


#### Using the CLI

You can also use the CLI `access` command to add package acess to a team via
the command line as follows:

```
npm access grant <read-only|read-write> <org:team> [<package>]
```

## Removing Package Access from a Team


#### Using the CLI

You can also use the CLI `access` command to add package acess to a team via
the command line as follows:

```
npm access revoke <org:team> [<package>]
```

[1]: managing-teams.md
[2]: https://docs.npmjs.com/cli/access
[Roles and Privileges doc]: roles-and-privileges.md
