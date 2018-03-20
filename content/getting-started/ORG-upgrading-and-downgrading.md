<!--
title: QA-ORGS-12 - How to Upgrade and Downgrade Your Account
featured: true
-->

# Upgrading and Downgrading 

This page explains how to upgrade and downgrade your Organization's plan. It also explains the implications of these actions for your package access and billing. 

You will need to have the Owner role to perform this work. For more information on roles, check out the [Roles and Privileges doc].

<hr/>

To upgrade or downgrade your Organization, navigate to your Organization's landing
page. You can find it at `https://www.npmjs.com/org/<org_name>`.

Once you are on your Organization's landing page, click the "payment info" tab. You
can also just point your browser at `https://www.npmjs.com/scope/<org_name>/billing`.

## Upgrading From a Free Org to a Paid Org

If you currently have a free Organization, but would like to add the ability to
install and publish private packages, you'll want to upgrade your Organization.

Not sure if you want to upgrade? ([Learn more about the plans we offer]).

To upgrade your Organization:

1. Choose Billing Info from your avatar menu:

<div style="text-align: center;"><img src="/images/billing-info-from-menu.png" style="border: 1px solid gray;"></div>

 2. Click the green `upgrade plan` button:

![UpgradeBilling](/images/billing-info-upgrade.png)

The next screen will confirm your choice, displaying the monthly cost calculated according to the current number of users that you have in your organization. In the screen shot, there will be 3 users, so the total is $21/month.

![Billing-total](/images/upgrade-message-three-users.png)

Your upgrade goes into effect immediately. You can now publish and install
private packages under your Organization scope. ([Learn more about publishing Org scoped packages]).

Your billing page shows a summary of your current account. As you add or subtract members, the billing page will reflect the change.

![billing info](/images/billing-info-paid-user.png)

If you run into any trouble with this process, please [contact npm support].

## Downgrading to a Free Org from a Paid Org

If you currently have an Organization with a private packages plan but no longer
want the plan, you can Downgrade Your Account.

Not sure if you want to downgrade? ([Learn more about the plans we offer]).

To downgrade your Organization:

1. Choose Billing Info from your avatar menu.

2. Find the green `downgrade plan` button:

![DowngradeBilling](/images/why-you-should-not-downgrade.png)

3. If you click `downgrade plan', this screen will appear:

![DowngradeBilling](/images/downgrade-are-you-sure.png)

Your billing page will confirm the downgrade, and list important dates, such as the date your publish/installaccess to your Private Packages will end. This usually coincides with the day your next billing period would have begun. Confirm that the bill now reads $0.00

![bill page after downgrading](/images/billing-screen-after-downgrade.png)

If you run into any trouble with this process, you should [contact npm support].

[Roles and Privileges doc]: roles-and-privileges.md
[Learn more about managing billing]: managing-billing.md
[contact npm support]: https://www.npmjs.com/support
[Learn more about publishing Org scoped packages]: publishing-an-org-scoped-package.md
[Learn more about the plans we offer]: https://www.npmjs.com/pricing
