# Migrating a User Account

You may already have an npm user account that you would now like to use
as an Organization. This page will teach you how to convert an npm user
account to an Organization and explain what will happen to
the converted user's packages.

<hr/>

## What Happens When I Migrate?

- All of your previous account's packages now belong to the Org.
- All of your previous team/Org memberships and contirbutor access are assigned
  to your new personal user account. 
- You will no longer be able to sign in as the previous account name.
- You will create a new npm user account.
- Your old username will be used to create a new Organization of that name
- Your new npm user account will be an Owner role on the newly created Organization
  ([Learn more about Roles and Privileges])

# How to Migrate

When and if you choose to migrate your npm user account to an Organization,
you will need to take the following steps:

### 1. Login to Your npm Account

Login as the npm user that you would like to convert to an Organization.
Click the "create an organization" link on your user profile.

### 2. Start the User2Orgs Workflow

Once you are logged in, navigate to your profile page. From there, you
should see three (3) links under the "Your Account" heading. Click
"create an organization".

If you are already logged in, you can also go directly to
[https://www.npmjs.com/org/create](https://www.npmjs.com/org/create).

Look at the left hand column. Click the "Upgrade" button. 

### 3. Create a New Personal User

Since you are converting your current user account to an Organization, you'll
need to create a new one to replace it.

After clicking "Upgrade", you should be on a screen where you will create a new
npm user account. Enter the new username you would like to use for your personal
account. 

### 4. Choose Your Plan

Once you've chosen a name for your new personal account, you'll need to choose
a plan for your new Organization. Currently, npm offers 2 plans:

  - **Free**: public packages only.
  - **Paid**: install and publish **private packages** ($7/user/month).

For example, if you have 3 users, an Organization that only needs public 
packages will be entirely free. However, if your Organization needs to
install and publish **private packages**, it will cost $21/month 
($7/month*3 users).

**You can change your plan any time through the billing panel.** For
more information on the features of each plan, visit our [pricing page].

Once you have chosen your plan, click the big red "Create an Organization"
button.

### 5. Enter Payment Information (paid Orgs only)

If you chose an Organization with access to private packages, clicking the
big red "Create an Organization" button will bring up a Stripe Payments
prompt. Enter the email address you'd like associated with billing (this
does *not* have to match the Owner's email), as well as billing address
and credit card information.

**You can change your billing info at anytime through your Organization's
billing page.**

Your credit card will be immediately billed $7 for a single user, the
account of the person creating the Organization. 


### 6. Add Members to your Organization

Once you've created your Organization, you are given the ability to add
members. You can add members to your Organization at any time, so feel free
to skip this step if you aren't ready to add users yet.

The user who created the Organization is:

- Automatically assigned the **role** of **Owner**. 
  [Learn more about Roles and Privileges].
- Automatically added to a **team** called **Developers**. 
  [Learn more about the Developers Team].

To add users to your Organization, enter their npm username into the text
input and click the red button that says "Invite". If you chose an
Organization with private package access, every user will add an 
additional $7/month to your bill.

**When you add a member to your Organization they are immediately added. They
do not receive an email, so please let your new members know that you have added
them.**

All the users you add from this interface are:

- Automatically assigned the **role** of **member**.
  [Learn more about Roles and Privileges].
- Automatically added to a **team** called **Developers**.
  [Learn more about the Developers Team].

If the person you would like to add to your Organization does not have an
npm username, they'll need to create an npm user account. You can send them
[this link][1] to sign up.


[pricing page]: https://www.npmjs.com/pricing
[contacting npm Support]: https://www.npmjs.com//support
[Learn more about Roles and Privileges]: /roles-and-privileges.md
[Learn more about the Developers Team]: /the-developers-team.md
[1]: https://www.npmjs.com/signup
