<!--
title: 02 - Downloading modules to CI/deployment servers
featured: true
-->

# Downloading modules to CI/deployment servers

If you are using deployment servers or testing with CI servers, you'll need a way to download your private modules to those servers. To do this, you can set up an `~/.npmrc` file which will authenticate your server with npm.

## Getting an authentication token

One of the things that has changed in npm is that we now use auth tokens to authenticate in the CLI. To generate an auth token, you can log in on any machine. You'll end up with a line in your `~/.npmrc` file that looks like this:

```
//registry.npmjs.org/:_authToken=00000000-0000-0000-0000-000000000000
```

The token is not derived from your password, but changing your password will invalidate all tokens. The token will be valid until the password is changed. You can also invalidate a single token by logging out on a machine that is logged in with that token.

## Setting up environment variables

To make this more secure when pushing it up to the server, you can set this token as an environment variable on the server. For example, in Heroku you would do this:

```
heroku config:set NPM_TOKEN=00000000-0000-0000-0000-000000000000 --app=application_name
```

You will also need to add this to your environment variables on your development machine. In OSX or Linux, you would add this line to your `~/.profile`:

```
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
```

and then refresh your environment variables:

```
source ~/.profile
```

## Checking in your `~/.npmrc`

Then you can check in the `~/.npmrc` file, replacing your token with the environment variable.

```
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```
