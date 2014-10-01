<!--
title: Managing whitelists
-->

## Selectively mirror the public registry

npmE goes beyond a simple local cache of the registry. It allows you to
selectively mirror the public registry, automatically inspecting every new and
updated package available in the public registry and applying a security
policy to determine if it should be made available locally. You can use
pre-built filters, or you can write your own, which is as simple as writing
an npm module and publishing it to your local registry. Some possible filters:

- Mirror the entire public registry as a local cache
- Mirror all packages except these blacklisted packages
- Mirror all versions of these whitelisted packages
- Mirror only approved versions of specific packages
- Mirror any package with an acceptable software license
