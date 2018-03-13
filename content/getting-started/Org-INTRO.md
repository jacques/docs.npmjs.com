<!--
title: QA-ORGS-1 - Introduction to Orgs
featured: true
-->

# npm Orgs

*This is a top-level introduction to Orgs. If you already know what Orgs are and want to get up and running, jump ahead to "Getting Started".*

<hr>

Orgs is a tool for managing both packages and teams of developers.
It was created to enable package publishers to handle
large numbers of contributors,  over a set of many packages.

## Organizing Packages

When you create an Organization, you are granted an Organization _scope_, a unique namespace for packages. The Organization scope will match the name that you give your Organiation. For example, if your organization is called "the best", you would register
as "the-best" and get a scope, `@the-best`. From there, you can name
your packages whatever you want (according to our guidelines, which are similar to the general package name [guidelines](https://docs.npmjs.com/files/package.json). 

Use scopes to, for example:

- Maintain a fork of a package, e.g. `@the-best/request`.
- Avoid name disputes with popular names, e.g. `@the-best/cat`.
- Improve internal discovery of Organization-supported packages
  (they're all in a single namespace!)

### Can I use my org to manage packages that aren't labeled with my org's scope? 
 
While you are granted a scope by default when registering as an Org, that doesn't
mean you *have* to use it. In fact, you can use Orgs to manage unscoped
packages, or even packages under a different scope, such as a user scope,
e.g. `@isaacs/hello`, where `isaacs` is an npm user.

## Organizing People and Package Access

The real benefit of Orgs is that it makes it easier, and in some cases,
simply *possible*, to manage access and visibility of packages across
a large team of contributors.

To get the biggest benefit from Orgs:

1. Organize your developers into teams. 
2. Grant team permissions (read/write) to packages you govern, which then
cascades to all Members of that team. 

This way, certain teams can develop a package (write access) while other teams can use the pacakge but can't modify it (read access). You can set the access that makes sense for your project, for all of the packages that the Organization governs, public unscoped packages and public/private scoped packages alike.

## What is the cost?

Orgs are **free** if your Organization only has public packages.

If your Organization needs to also publish and install **private packages**,
an Org will cost you $7/month/user, for each user, including yourself. 
