<!--
title: 17 - How to work with security tokens
featured: true
-->
# How to Work with Security Tokens
*Requires npm version 5.5.1 or greater*

Whenever you login to npm, a security token (a hexadecimal string) is generated. Tokens authenticate your account, and provide the rights you need to publish and access your modules. Tokens are often used with continuous integration testing environments. For example, Travis-CI provides an environment variable that you can assign to a token value. This gives Travis-CI the ability to run npm as your npm user, including the ability to install private packages to which you have access. 

Read this chapter to learn how to manage security tokens. 

**Note**: *There are additional steps required if you wish to use tokens for testing and other special purposes. These steps are out of the scope of this chapter.* 

Token commands empower you to:

* View tokens for easier tracking and management
* Create new tokens, specifying read-only or full-permission
* Delete/revoke tokens  
* Limit access according to IP address ranges (CIDR)

## How to View the Tokens On Your Account: 

To view the tokens associated with your account, type: 

 `npm token list`. 

![npmtokenlist](/images/npm-token-list-shorter-list.png)

The following table explains the token list. 

![tokenlisttable](/images/token-list-table.png)

A token can be both read-only as well as CIDR-whitelisted. 

If you have enabled two-factor authentication on your profile, you have an additional layer of security. No one will be able to modify or create your tokens unless they provide the second authentication factor. 

**Note**: The token list shows a truncated version of the token. 
View the [npmrc file](https://docs.npmjs.com/files/npmrc) if you need to see the full token. 

## How to Create New Tokens

`npm token create [--read-only] [--cidr=list]`

Before you create a new token, decide which type of token you want:

* read-only (installation/distribution rights)
* full permission (publishing rights)
* CIDR whitelist (restricted by ip address)

The default setting for new tokens is full-permission.

* *Read-only* tokens allow installation and distribution.
* *Full-permission* tokens allow installation, distribution, publishing, and all rights that you have on your account
* *CIDR whitelist* tokens can only be used from specified ip address ranges. Use this to restrict tokens to a single company, or a specified developer team, for example. At this time, only IPv4 is supported. 

When a token is read-only, it cannot be used to make changes to a package. If a token is not explicitly set to read-only, it has full permissions, including publish and modification rights. 

### How to Create a New Full-Permission token:

To create a new full permission token, type:

'npm token create'

If you have set up two-factor authentication, you will be prompted for your npm password, followed by an OTP. npm will display this table: 

![npmtokencreatelong](/images/npm-token-create-long-version.png)

**NOTE**: Save a screen shot of the token field, as this will be your only chance to view it.  

Note that readonly defaults to *false*.

### How to Create a New Read-Only Token

To create a new read-only token, type:

`npm token create --read-only`

If you have set up two-factor authentication, you will be prompted for an npm password, followed by an OTP. npm will display this table: 

![npmtokencreatereadonly](/images/npm-token-create-readonly.png)

Note that read-only is set to *true*.

### How to Create a New CIDR-Restricted Token

To limit the token so that it can only be used from specified ip addresses, you can create a CIDR-restricted token. CIDR is an acronym for Classless Inter-Domain Routing. The [CIDR Wiki page](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) will get you started. 

Using a CIDR restriction makes it possible for you to force anyone or any system using the token to either physically or remotely be within the specified ip address range. 
```
	npm token create --[--cidr=list]
```

example.: 

```
	npm token create --cidr=192.0.2.0/24

```

If you have set up two-factor authentication, you will be prompted for an npm password, followed by an OTP. npm will display this table: 


![npmtokencreatecidr](/images/CIDR-create-token.png)

If you see a message like this one:  

```
npm ERR! CIDR whitelist contains invalid CIDR entry: X.X.X.X./YY,Z.Z.. . .

```

(where the string returned is the one you entered) please ensure that the CIDR string is valid and in the appropriate format. Note: npm only supports IPv4 at this time. 

### How to Create a CIDR-Restricted Read-Only Token

To create a CIDR-restricted token that is also read-only, type:

```
npm token create --read-only --cidr=list
```

## How to Revoke Tokens

You can delete (revoke) a token, regardless of when it was created. This allows you to gain control of access you may wish to take back. 

The command to delete a token is:

```npm token delete```

Here are the steps:

1. Type `npm token list`
2. Find the token ID affiliated with the token you want to delete. 
2. Type 'npm token delete 123456', where 123456 is the *token id*. Note: The truncated version of the token will not work. 
  
```
npm will report 'Removed 1 token'
```

Type 'npm token list' to confirm that the token has been removed. 

The following screen shot demonstrates these steps:

![npmtokenrevokeshort](/images/npm-token-revoke-shorter.png)

*Note*: All tokens shown in screen illustrations have been revoked. 

 