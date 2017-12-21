<!--
title: 18 - How to change profile settings from the CLI
featured: true
-->

# How to Change Profile Settings from the CLI
*Requires npm version 5.5.1 or greater.*

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

![npmgetprofile](/images/profile_after_tfa_enabled.png)

You can set or modify the following profile properties from the command line:

* email
* password
* fullname
* homepage
* freenode
* twitter
* github 

### How to Set a Password from the Command Line

To set a password, type:

`npm profile set password`

npm will prompt you for your current password, then you can set the new password. 

The password must follow these guidelines:

* longer than 7 characters
* does not contain part of your username 
* is not one of these [common passwords](https://github.com/ashleygwilliams/rockyou/blob/master/data/70.txt) 

These rules protect your password by making it difficult to guess. 

### How to Set Other Profile Properties

To set other values, append them to the end of the line as shown: 

```
$npm profile set fullname nori pat marsupial
```
npm will prompt for credentials, including a one-time-password if you have enabled two-factor authentication. npm will then  confirm that the change has occurred: 

```
Set fullname to nori pat marsupial
```

## Enabling and Disabling Two-Factor Authentication 

You can also enable and disable two-factor authentication from the command line, using the steps described [here](https://docs.npmjs.com/getting-started/using-two-factor-authentication).

Enable two-factor authentication if you would like to make it more difficult for attackers to gain access to your account and your publishing rights.

### Notes

Please refer to the [command line documentation](https://docs.npmjs.com/cli/profile) for more details and examples. 
