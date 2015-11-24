<!--
title: 03 - Roles
featured: true
-->

# Roles

Organizations are first and foremost a way to manage access, roles
and resposibilities. Organizations offer 3 types of roles, and also
have an interface with the general public:

- ## Super-Admin
  
  The user who creates the Organization is automatically set as the 
  Super Admin. 

  ** Please do NOT delete your Super Admin account. This will lock you out of your
  Organization and you will need to contact support@npmjs.com. The npmjs team is
  currently working on a fix for this, which will be available soon. **

  **Currently, only one Super Admin is allowed and the Super Admin
  User cannot be changed. New versions of our Orgs product will make
  this possible.**


  - can see/do everything regarding their org
  - can pay for the org
  - can [add users to the org (team-admin or developer)][1]

- ## Team-Admin

  Team Admins are set by the Super Admin in the [website interface][2].
  There can be >=0 Team Admins.

  - can [see teams][3]
  - can add a [new org-scoped package][4]
  - can add a [pre-existing package][5]
  - cannot pay
  - cannot add/remove users to/from org
  - can [add/remove users to/from teams][6]

- ## Member

  Members are added to teams by the Organizations Super Admin or Team
  Admin.

  - can [see the teams they're on][7]
  - can [see the packages associated with those teams][8]
  - can [add a new org-scoped][4]
  - cannot pay
  - cannot add users

- ## General Public

  While not associated with the Organization, the general public has
  some ability to interact with Organizations.

  - can see the org exists
  - can see public packages in the org's domain
  - cannot see private packages
  - cannot see members
  - cannot do anything for the org (manage members, teams, packages, billing, etc)

[1]: /orgs/setup#adding-members-to-an-organization
[2]: /orgs/setup#creating-team-admins
[3]: /orgs/teams#list-an-organization-s-teams
[4]: /orgs/scoping-packages
[5]: /orgs/preexisting-packages
[6]: /orgs/teams#adding-users-to-a-team
[7]: /orgs/teams#list-teams-a-member-belongs-to
[8]: /orgs/package-access#view-a-team-s-package-access
