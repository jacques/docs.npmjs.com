<!--
order: 3
title: Installing the server
featured: true
-->

# Installing the npm Enterprise server

npmE runs locally, on a server you control, with no external dependencies. Many organizations want this for security, regulatory, or operational reasons.

## Server setup

Follow the instructions in the [quickstart video](/enterprise/intro), or do the following:

1. [Sign up for a trial license](http://www.npmjs.org/enterprise#contact) for npm Enterprise.
1. Make sure you have a machine that meets the [installation requirements](/enterprise/requirements). It can also be run in a [Docker container](https://github.com/npm/npme-docker).
1. On the server, run ```npm install npme```. Do NOT run using `sudo`.

The installation process will require your billing email and the license key you received during signup.

## Installation questions

The `npme` installer will ask you a series of questions as it configures your
machine.

<dl>
    <dt>[sudo] password for *user*</dt>
    <dd>Your system is requesting the system admin password. The installer must run as root.</dd>
    <dt>this will install npmE on the server (you should only run this on a dedicated machine), continue?</dt>
    <dd>The installer assumes npm Enterprise (npmE) is the only service running on the
        machine. If you have other services that use the same ports as npmE you may run
        into errors.</dd>
    <dt>enter your billing email</dt>
    <dd>This is the email address you used to sign up for the trial. It does not need
        to be an npm user.</dd>
    <dt>enter your license key</dt>
    <dd>You received this via email when you signed up for the trial. It looks like
        `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.</dd>
    <dt>full URL of front-facing host that npm Enterprise will run on. Include 'http' and ':8080'</dt>
    <dd>This URL needs to be accessible from your users' machines and also accessible to the appliance itself. It must include the port number, e.g. `http://registry.example.com:8080`</dd>
    <dt>path to package whitelist used by public registry follower</dt>
    <dd>The location of the whitelist file. This defaults to `/etc/npme/whitelist` and you should not need to change this.</dd>
    <dt>full URL of your GitHub Enterprise appliance</dt>
    <dd>The URL of your GitHub Enterprise appliance. This defaults to using GitHub itself.</dd>
    <dt>folder on HD to store package binaries</dt>
    <dd>The location to store the npm Enterprise binaries. This defaults to `/etc/npme/packages` and you should not need to change this.</dd>
</dl>
