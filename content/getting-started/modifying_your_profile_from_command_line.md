<!--
title: 18 - Modifying profile settings from the command line
featured: true
-->

# Modifying Profile Settings from the Command Line

To view and set profile properties from the Command Line Interface (CLI), use these commands: 

```
npm profile get 
npm profile set <prop> <value>
```

## Viewing & Setting Profile Values

To see your current profile settings, type:

```
npm profile get
```
npm displays your profile settings in a table:

![npmgetprofile](/images/npm_get_profile.png)

You can set or modify the following profile properties from the command line:

* email
* password
* fullname
* homepage
* freenode
* twitter
* github 

To set a password, type `npm set password'. npm will prompt for your current password, then prompt for you to set a a new password. 

To set other values, append them to the end of the line as shown: 

```
$npm profile set fullname nori pat marsupial
```
npm will prompt for credentials, then respond to confirm that the change has occurred: 

```
Set fullname to nori pat marsupial
```

## Enabling and Disabling Two-Factor Authenticaiton 


You can also enable and disable two-factor authentication from the command line, using the steps described [here](https://docs.npmjs.com/getting-started/using-two-factor-authentication).

Enable two-factor authentication if you would like to make it more difficult for attackers to gain access to your account and your publishing rights.

### Notes

Please refer to the [command line documentation](https://docs.npmjs.com/cli/profile) for more details and examples. 
