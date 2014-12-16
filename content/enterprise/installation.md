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
    <dt>what user should npmE run as</dt>
    <dd></dd>
    <dt>what group should npmE run as</dt>
    <dd></dd>
    <dt>should privileged commands be run using sudo</dt>
    <dd></dd>
</dl>
