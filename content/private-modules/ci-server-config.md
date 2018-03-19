<!--
title: 02 - Downloading packages to CI/deployment servers
featured: true
-->

# Downloading packages to CI/deployment servers

If you are using deployment servers or testing with Continuous Intergration  servers, you'll need a way to download your private packages to those servers. These are the steps:

* Create a new auth token
* Set up a project-specific .npmrc file.
* Configure the ci/deployment server to provide the auth token
* Configure your personal environment to provide a different auth token 


## How to create a new authentication token

One of the things that has changed in npm is that we now use auth tokens to authenticate in the CLI. To generate an auth token, use `npm token create`.

```
$ npm token create
npm password:

┌────────────────┬──────────────────────────────────────┐
│ token          │ d97a6e1f-cb87-0000-94e0-e06fe03c8a5c │
├────────────────┼──────────────────────────────────────┤
│ cidr_whitelist │                                      │
├────────────────┼──────────────────────────────────────┤
│ readonly       │ false                                │
├────────────────┼──────────────────────────────────────┤
│ created        │ 2018-03-14T21:57:25.427Z             │
└────────────────┴──────────────────────────────────────┘
```

There are several settings that you can use in the new token. Please see this [doc] (https://docs.npmjs.com/getting-started/working_with_tokens) for details. 

## Setting up a project-specific .npmrc file

Set up a custom [`.npmrc`](https://docs.npmjs.com/files/npmrc) file in your project folder. Use this to authenticate the CI or deployment server with npm. 

 
## Setting up environment variables

To make this more secure when pushing it up to the server, you can set this token as an environment variable on the server. 

You will also need to add this to your environment variables on your development machine. In OSX or Linux, you would add this line to your `~/.profile`:

```
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
```

and then refresh your environment variables:

```
source ~/.profile
```

### Checking in your `.npmrc`

Then you can check in the [`.npmrc`](https://docs.npmjs.com/files/npmrc) file, replacing your token with the environment variable.

```
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```
### How to Invalidate a Token

The token is not derived from your password, but changing your password will invalidate all tokens. The token will be valid until the password is changed. You can also invalidate a single token by logging out on a machine that is logged in with that token.

`npm token revoke' is a better choice. For instructions, [see](https://docs.npmjs.com/getting-started/working_with_tokens).