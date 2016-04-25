<!--
order: 1
title: Quickstart
featured: true
-->

# npm Enterprise Quickstart

This is the fastest way to get started with npm Enterprise - your own private npm registry and website!

## tl;dr

Here's what we're going to cover in this guide:

1. [Install npm Enterprise on your server](#1-install)
2. [Configure and start your Enterprise instance](#2-configure-server)
3. [Configure the npm CLI to talk to your registry](#3-configure-client)
4. [Publish, install, and search for packages](#4-use)

Minimal details are given for each step. For more exhaustive details, please see the linked docs pages.

Here's a quick video to help walk you through this process:

<iframe width="640" height="480" src="https://www.youtube.com/embed/mKMaG0cixXw" frameborder="0" allowfullscreen></iframe>

<a name="1-install"></a>
## 1. Install npm Enterprise on your server

- Provision a modern Linux server fulfilling the [prereqs](/enterprise/requirements)

    You will need:

    - a 64-bit version of Ubuntu 14/15 or CentOS/RHEL 7
    - 4 GB of RAM
    - at least 10 GB of disk space
    - ports 8080, 8081, 8082, and 8800 opened for inbound TCP traffic
    - access to the public internet, either directly or via proxy

    On AWS, use an m3.large instance type and define a Security Group to open the ports above.

- Install latest Node.js and npm for <a href="https://nodejs.org/en/download/package-manager/" target="_blank">your Linux distro</a>

    Ubuntu/Debian:

    ```
    $ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    $ sudo npm i -g npm@latest
    $ node -v && npm -v
    ```

    CentOS/RHEL:

    ```
    $ curl -sL https://rpm.nodesource.com/setup_4.x | sudo -E bash -
    $ sudo yum -y install nodejs
    $ sudo npm i -g npm@latest
    $ node -v && npm -v
    ```

- Use npm to install `npme`

    ```
    $ sudo npm install npme -g --unsafe
    ```

    Watch for and answer any prompts.

    This will install Docker and run an admin web console on port 8800, which you will use to configure your Enterprise instance and complete the installation below.

<a name="2-configure-server"></a>
## 2. Configure and start your Enterprise instance

- Get a license key by <a href="https://www.npmjs.com/enterprise" target="_blank">signing up</a> for a free trial license

    You will need a license key to continue.

- Visit `https://<your-server>:8800` in your favorite web browser and proceed past the security warning

    The security warning is due to initial use of a self-signed certificate. You can plug in your own SSL/TLS certificate in the next step.

- Paste your server's DNS name or IP in the "Hostname" field and choose your SSL/TLS option

    If using the self-signed certificate, proceed past the browser security warning again if you are redirected to `https://<dns-name>:8800`.

- Enter "Billing Email" and "License Key" you received via email or the npmjs.com site and hit "Continue"
- Enter a new password to protect your admin console and hit "Continue"
- Select your desired settings and hit "Save"

    Enter your company's name in "Your company name" and, for purposes of quickstart, select "Open" for "Authentication". Other default settings should be fine.

    Note that you can always come back and change configuration later. Any time you change configuration settings, you must restart the services for the changes to take effect.

    Please visit [this page](/enterprise/server-configuration) for details on configuration settings.

- Hit "Take me to the Dashboard"

    The admin console will begin to download all the services that make up your registry and run them as Docker containers. If the services don't start automatically, use the "Start Now" button in the top-left panel of the Dashboard.

    Wait for the services to reach a status of "Started". Once they do, your registry is up and ready for use.

- Quickly verify that your registry is running and accessible

    Either run `curl http://<your-server>:8080` or visit that url in your browser. If you get a JSON response, your Enterprise registry is good to go!

<a name="3-configure-client"></a>
## 3. Configure the npm CLI to talk to your registry

- Select a scope name for your company or project

    You will use this scope as a prefix for all private packages. E.g. if you choose `@myco` for a scope, you could have private packages named `@myco/foo` and `@myco/bar`.

- Login to your registry and associate it with your scope name

    On your local computer, use the following command and plug in your registry url and selected scope name.

    ```
    $ npm login --registry http://<your-server>:8080 --scope @myco
    Username: me
    Password:
    Email: (this IS public) me@myco.com
    ```

    The username, password, and email you use should respect the configured authentication strategy in your Enterprise admin web console. If using the "Open" authentication strategy, any values will work.

    Note that this will add content to your [`.npmrc`](/files/npmrc) file, similar to the following:

    ```
    @myco:registry=http://<your-server>:8080/
    //<your-server>:8080/:_authToken=abc123
    ```

    With this in place, any publishes or installs of packages with the `@myco` scope will automatically go to or come from your private Enterprise registry.

    For more details on configuring the npm client for your Enterprise registry, see [this page](/enterprise/client-configuration).

- Optionally set your Enterprise registry as your primary registry

    ```
    $ npm config set registry http://<your-server>:8080
    ```

    This will add the following to your [`.npmrc`](/files/npmrc) file:

    ```
    registry=http://<your-server>:8080/
    ```

    With this in place, all installs will go through your Enterprise registry.

    If using this option, you should make sure the "Read Through Cache" setting is enabled (default) in the admin console of your server.

<a name="4-use"></a>
## 4. Publish, install, and search for packages

- Publish a scoped package to your Enterprise registry

    Create a test package named after your scope and `npm publish` it. Here's an example:

    ```
    $ mkdir test-pkg
    $ cd test-pkg
    $ npm init -y --scope @myco
    $ echo "module.exports = 'test successful'\n" > index.js
    $ npm publish
    ```

    Visit your registry's website at `http://<your-server>:8081/` and find the `@myco/test-pkg` package under "recently updated packages".

    For more details on publishing packages to your Enterprise registry, see [this page](/enterprise/using-it).

- Install a scoped package from your Enterprise registry

    Verify you can install the test package created above. Go to another directory and `npm install` it.

    ```
    $ mkdir downstream
    $ cd downstream
    $ npm install @myco/test-pkg
    $ node -e "console.log(require('@myco/test-pkg'))"
    test successful
    ```

    The package should be downloaded to a local `node_modules` directory so you can `require()` and use it.

- Search for packages using the CLI

    ```
    $ npm search @myco
    ```

- Search for package using the website

    Visit your registry's website at `http://<your-server>:8081/` and use the search bar at the top.
