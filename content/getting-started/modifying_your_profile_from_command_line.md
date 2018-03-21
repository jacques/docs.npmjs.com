<!--
title: 18 - How to change profile settings
featured: true
-->
npmjs.com has been updated. There are now new profile settings you can enable from the website, or, you can use the command line interface if you prefer.  

# Setting up Your Profile from the Web

To set up your profile on npmjs.com, login. 

Choose `Profile Settings` from the Avatar menu. The profile page appears. 

<div style="text-align: center;"><img src="/images/profile-page.png" style="border: 1px solid gray;"></div>

Starting from this page, you can:

* Change your avatar (the icon that represents you)
* Add a Github user name
* Add a Twitter user name 
* Change the email that appears with packages
* Change your password
* Apply or revoke two-factor-authentication
* View Packages

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

<div style="text-align: center;"><img src="/images/profile-after-tfa-enabled.png" style="border: 1px solid gray;"></div>

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

Enable two-factor authentication if you would like to make it more difficult for attackers to gain access to your account and your publishing rights.

You can enable and disable two-factor authentication from the command line, or from the web, using the steps described [here](https://docs.npmjs.com/getting-started/using-two-factor-authentication).

### Notes

Please refer to the [command line documentation](https://docs.npmjs.com/cli/profile) for more details and examples. 
