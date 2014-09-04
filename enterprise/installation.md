## npm install npmE

npmE runs locally, on a server you control, with no external dependencies
(mirroring the public registry of course requires external internet access, but
mirroring is optional). Many organizations want this for security, regulatory,
or operational reasons.

As you would expect, npmE is installed using npm! Our installation process asks
you a series of simple questions about your local environment, and sets up all
the services it needs to run.

To get started, [sign up for a trial license](https://www.npmjs.com/enterprise#contact)
for npm Enterprise. Make sure you have a machine that meets the
[installation requirements](/enterprise/requirements), including an npm client
version 2.x and the latest version of node.js.

Then simply:

```bash
npm install npme
```

(Do NOT run sudo).

The installation process will require the billing email and license key you
received during signup.

## Installation questions

The `npme` installer will ask you a series of questions as it configures your
machine. Let's run through them:

- [sudo] password for *user*:

The installer must run as root.

- "This will install npmE's OS-dependencies (CouchDB, Nginx, etc). Only run on a new server image. Continue?"

The installer assumes npm Enterprise (npmE) is the only service running on the
machine. If you have other services that use the same ports as npmE you
may run into errors.

- enter your billing email

This is the email address you used to sign up for the trial. It does not need
to be an npm user.

- enter your license key

You received this via email when you signed up for the trial. It looks like
`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.

