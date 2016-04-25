<!--
order: 5
title: Mirroring the public registry
-->

# Mirroring the public registry

Sometimes you want your private registry to maintain copies of packages from the public registry. This is called mirroring, and companies do it for a number of reasons:

- To limit development to an approved set of packages
- To ensure developers and build machines can keep working even when there is a connectivity problem
- To maintain an independent copy of all package versions, in case an author unpublishes a version

You can set up different policies to dictate how your npm Enterprise server manages mirroring.

NOTE: If you want clients to use the mirrored packages from your npm Enterprise server instead of accessing them from the public registry, the clients must be [configured](/enterprise/client-configuration#using-your-private-registry-for-all-packages) to do so.

## Whitelisting

The default policy for mirroring is the whitelist policy. A whitelist provides a list of packages which should be copied to npm Enterprise and periodically updated from the public registry.

The default location for the whitelist is `/usr/local/lib/npme/data/whitelist`.

### Whitelisting from the server

You can configure what packages should be copied from the public registry to npm Enterprise on the server. Add packages to your whitelist by running this command on the server:

```
npme add-package <packagename>
```

This will trigger mirroring for that package and all of its dependencies.

### Whitelisting from the client

If you do not want to set up your whitelist manually in advance, you can also configure your server to copy packages to your npm Enterprise server (and add them to the whitelist automatically) when they are requested by a client. For example, if a client requested `lodash` from your npm Enterprise server and it did not exist, then npm Enterprise would look for `lodash` in the public registry, copy it over, add it to the whitelist, and then serve it to the client.

To allow clients to add packages to the whitelist, visit npm Enterprise's admin console and set `Read through cache` to `Yes`.

## Full mirroring

A full mirror will copy all packages from the public registry to your npm Enterprise server. Enable this by setting `policy to apply during replication` to `mirror` in npm Enterprise's admin console (_http://myreg.mycompany.com:8800_).
