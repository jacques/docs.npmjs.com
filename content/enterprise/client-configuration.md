<!--
order: 4
title: Configuring the client
featured: true
-->

# Configuring the client

The client you use to interact with your npm On-Site server is the same client that you use with the public npm registry.

## Install the latest npm client

npm On-Site requires a 2.x or newer version of the npm client. You can get this by running

```bash
[sudo] npm install npm -g
 ```

## Pointing your client to the registry

Once you have an up-to-date client, you can configure it to install from and publish to your private npm On-Site registry.

### Using your private registry for all packages

If you want all packages, whether they are under a scope or not, to be stored in your private registry, then
you should configure the npm client to use your private npm On-Site appliance as the top
level registry. To do this, use the `--registry` flag without the `--@scope` flag.

```bash
npm login --registry=http://myreg.mycompany.com:8080
```

When clients are configured this way, they will always use your private npm On-Site registry as their main registry. When using `npm install`, it will only look in the private registry to find the package. This can lead to problems if you haven't mirrored all of the packages that your users need from the public registry.

 To make life easier for your users, you can configure npm On-Site to automatically mirror a package from public registry when the user tries to install a package that is not yet mirrored. The package will also be added to the whitelist.

 To do this, set `Read through cache` to `Yes` in the npm On-Site
 admin console (_http://myreg.mycompany.com:8800_)

### Using your private registry for your scoped packages

If you want to default to using the public npm registry for most packages and only use your private registry for packages under a particular scope, then you can specify that the registry should only be used for that scope.

```bash
npm login --registry=http://myreg.mycompany.com:8080 --scope=@myco
```

## Logging in

The `npm login` command will prompt you for your credentials. By default, these will be your GitHub or GitHub Enterprise credentials.

You should configure npm On-Site in the admin console to point to your
GitHub Enterprise server. Read more about our [GitHub Enterprise Integration](/enterprise/github).

Read about how to configure custom authentication [here](/enterprise/custom-authentication).
