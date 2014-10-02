<!--
title: GitHub integration
keywords: github, git, enterprise
description: If your organization uses GitHub or GitHub Enterprise, npmE can be configured
  to automatically use them for login and access control.
-->

## Integrates with GitHub and GitHub Enterprise

If your organization uses GitHub or GitHub Enterprise, npmE can be configured
to automatically use them for login and access control. Simply add a
repository field to your package.json that points to your repo:

```js
{
  ..
  "repository": {
    "url": "git://github.mycompany.com/myco/mypackage.git"
  }
}
```

Depending on your configuration, npmE can restrict installation of your
package to users who have access to the repo for that package, and restrict
publishing of that package to users who have commit access to the repo.

npmE uses OAuth to interact with GitHub, and will support any other OAuth2
providers. A standalone solution for authentication and authorization is
coming soon.
