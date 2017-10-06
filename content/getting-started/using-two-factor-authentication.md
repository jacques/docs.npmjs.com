<!--
title: 16 - Using two-factor authentication
featured: true
-->

# Using Two-Factor Authentication

To meet the increasing need for strong digital security, npm has introduced two-factor authentication (2FA).  2FA prevents unauthorized access to your
accounts and projects. *Two-factor*  means that someone cannot break into your account with a single method. For example, if you need a card to get into your building, plus a key to access your office, you can't get into the building with only the card or only the key. 

You have probably used 2FA before. For example, if you need to provide a code from your phone in addition to logging in with a password to access your online bank account, your bank has enabled 2FA.  

Set two-factor authentication to restrict access to your account, and to limit or prevent the ability of others to modify packages.  

## Preparation

To get started using 2FA with your npm account, you will need an application that can provide a second authentication factor. If you don't have one, please download a product such as [Authy](https://authy.com/download/) or 
[Google Authenticator](https://support.google.com/accounts/answer/1066447). 

Some authenticators scan QR codes, others generate a one-time password, or OTP. 

(Note: npm will not use SMS (text-to-phone) as a method for authenticating users.)

## New Security Options Related to Two-Factor Authentication

Here are actions you can take to increase security:

* Enable two-factor authentication on your user profile to prevent spoofing
* Limit access according to IP address ranges (CIDR)
* Generate one-time use Password Recovery codes in case you forget your password
* Create and delete (revoke) specialized tokens to allow targeted and controlled distribution, testing, and modifications

## Working with the New Profile Options

You can now make changes to your profile from the Command Line Interface (CLI). Even though 2FA is set via the command line, the settings also apply to website access. This documentation highlights the most common commmands. Please see the CLI doc for additional details.  

### New Profile Commands

  `npm profile enable-2fa [auth-only|auth-and-writes]`
  `npm profile disable-2fa`
  
There are two levels of authentication, *auth only* and *auth-and-writes*:

* *auth only*  requires a one-time-password (OTP) when logging on or making changes to your account's authentification. 
* *auth-and-writes*  requires an OTP in all instances that auth-only does. Additionally, this setting requires an OTP when publishing a module, setting the latest version, changing access, and other actions. 

### How to Add Two-Factor Authentication to your Profile

The first step toward greater security is to add 2FA to your profile. This will prevent spoof attacks, where someone logs in as if they were you.

#### Enabling Auth-and-Writes Two-Factor Authentication

To require two-factor authentication when logging in, writing, publishing, and making other changes, type either command. (The auth-and-writes setting is the default.)
  
        npm profile enable-2fa
        npm profile enable-2fa auth-and-writes 
        
        npm will return this message:
        
        $ npm profile enable-2fa
        > npm notice profile Enabling two factor authentication for auth-and-writes
   
#### Enabling Auth-Only Two-Factor Authentification

If you want to enable 2FA, but you only want it to be activated when you first login, use the *auth-only* setting. 

        npm profile enable-2fa auth-only
        
 npm will return this message: 
 
        ```
        $ npm profile enable-2fa auth-only
        > npm notice profile Enabling two factor authentication for auth-only
        ```

#####Entering the Second Factor

After you specify the setting you want to enable, npm will present a QR code with this message:

   
    Scan into your authenticator app or enter code: [**your code**]
    And an OTP code from your authenticator:
    
Use your authenticator app to scan the QR code, or to enter the OTP code as directed.  After you do this, you will see this message:

    2FA successfully enabled. 
    Below are your recovery codes, please print these out. 
    You will need these to recover access to your account 
    if you lose your authentication device.
 
This statement will be followed by a series of codes. Please print them or save them as described in the message.

    >**WARNING**: You must save these codes in a location that is not  
    not normally near the device you use to authenticate. If you lose this device, or forget your password, these codes will be your only way to get back online.

### How to Remove Two-Factor Authentication from your Profile

1.  To remove 2FA from your profile, type this command:

    ```
    npm profile disable-2fa
    ```
npm will display:

````
    $ npm profile disable-2fa
    > npm password:
    
````

2.  Enter your npm password as prompted. 

    npm will display: 
    
````
 >Enter one-time password from your authenticator: 123456
 
````
	npm will confirm: 

````
 Two factor authentication disabled.
````

### Note

The commands `npm profile enable-tfa` and `npm profile enable-2fa`, with or without dash `'-'`, are aliases. Similarly, `npm profile disable-tfa` and `npm profile disable-2fa`, with or without dash `'-'` are aliases.

Please see the command line documentation for more details. 

#Tokens 
