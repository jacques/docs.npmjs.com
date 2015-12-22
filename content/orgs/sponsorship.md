<!--
title: 06 - Sponsorship
featured: true
-->

# Sponsorship

## Sponsorship Types

![org-sponsorship levels](/images/orgs/ships-dashboard.png)

Let's say we have an Organization, `@ag_org`. This Organization
was created by user `@ag_dubs`, and therefore she is the [`Super 
Admin`]. 

![super admin](/images/orgs/ships-superadmin.png)

Being a Super Admin, she adds 3 members to her team:

- Jacques Derrida
- Carl Sagan
- Emma Goldman

There are three types of Sponsorship that can occur:

- Paid by Current Organization
- Paid by Self or Another Organization
- Not Paid

### Paid by Current Organization

When Super Admin, `@ag_dubs`, added `JacquesDerrida` to the Organization,
`JacquesDerrida` did not already belong to an organization nor did they have a
subscription to private packages.

By default, when the Super Admin added him to the Organization, `JacquesDerrida`
was set as a member of the Organization, **paid by the current organization**.
This appears in the UI like this:

![paid by current org](/images/orgs/ships-paidcurrent.png)

- Because `JacquesDerrida` is a `developer` in the org, they can:
  - Be added to any/all of the Organization's teams,
  - See the teams they are on,
  - See the other members of the team,
  - _See_ the packages (both public and private) those teams grant access to,
- Because `JacquesDerrida` is sponsored, they can:
  - Install, publish, and unpublish the private packages to which they have access

`JacquesDerrida` cannot:
  - See all of the Organization's teams
  - See all members of the Organization

### Paid by Self or Another Organization

- #### Paid for by Another Organization
  
  When Super Admin, `@ag_dubs`, added `CarlSagan` to the Organization, `CarlSagan`
  already belonged to another Organization (`@nasa-org`, duh).

  By default, when `CarlSagan` was added to the Organization, he was set as a member
  of the Organization, **paid by another scope**. This appears in the UI like this:

  ![paid, but not by the org](/images/orgs/ships-paidother.png)

  As a result, `CarlSagan` has the same permissions as `JacquesDerrida`, above.

  - #### Paid for by Self
  
    As a subscriber to Private Packages, you can understand your sponsorship as "sponsoring
    yourself". As a result, a subscriber to private packages would have had the same
    default behavior as occured for `CarlSagan`, i.e., the previous sponsorship would
    trump the possibility of a new Organization sponsorship. A subscriber to private
    packages will appear in the Organization dashboard as someone who is `paid` but
    `not by the current org`. This appears in the UI the same as above:

    ![paid, but not by the org](/images/orgs/ships-paidother.png)

  - #### Changing Sponsorship

    If a user is a subscriber to private packages, this sponsorship scope will
    trump all other potential sponsorships. If you would like to change this, i.e.,
    offer sponsorship to a user who already has another sponsorship (org or private pkgs),
    please contact [support@npmjs.com](mailto:support@npmjs.com). 

- ### Not Paid

  `EmmaGoldman`, at the time that `@ag_dubs` added them to the `@ag_org` Organization,
  did not subscribe to private packages nor did they belong to another Organization.
  This means that they did not have any previous sponsorships.

  Like `JacquesDerrida`, `EmmaGoldman` was set as **paid by the current organization,
  `@ag-org`** by default. However, Super Admin `@ag_dubs` opted to cancel `@ag-org`'s
  sponsorship of `EmmaGoldman`. This status appears in the UI like this:

  ![not paid](/images/orgs/ships-notpaid.png)

  - Because `EmmaGoldman` is a `developer` in the org, they can:
    - Be added to any/all of the Organization's teams,
    - See the teams they are on,
    - See the other members of the team,
    - _See_ the packages (both public and private) those teams grant access to,
  - Because `EmmaGoldman` is _not_ sponsored, they _cannot_:
    - Install, publish, and unpublish the private packages to which they have access

  `EmmaGoldman` can:
    - Collaborate on and publish public, scoped or unscoped packages, that their team
      membership grants them access to

  `EmmaGoldman` cannot:
    - See all of the Organization's teams
    - See all members of the Organization
    - Collaborate on and publish any private packages, even if their team membership
      would otherwise grant them access

[`Super Admin`]: /orgs/roles#Super-Admin    
