<!--
title: 13 - Semantic versioning and npm
featured: true
-->

# Semantic versioning and npm

<iframe src="https://www.youtube.com/embed/kK4Meix58R4" frameborder="0" allowfullscreen></iframe>

Semantic versioning is a standard that a lot of projects use to communicate what kinds of changes are in this release. It's important to communicate what kinds of changes are in a release because sometimes those changes will break the code that depends on the package.

## Semver for publishers

If a project is going to be shared with others, it should start at `1.0.0`, though some projects on npm don't follow this rule.

After this, changes should be handled as follows:

![SemVerTable](/images/sem_ver_table.png)

## Semver for consumers

As a consumer, you can specify which kinds of updates your app can accept in the `package.json` file.

If you were starting with a package 1.0.4, this is how you would specify the ranges:

* Patch releases: `1.0` or `1.0.x` or `~1.0.4`
* Minor releases: `1` or `1.x` or `^1.0.4`
* Major releases: `*` or `x`

For more about using package.json files for this purpose, see [Chapter 5](https://docs.npmjs.com/getting-started/using-a-package.json#specifying-packages). 

For another way to label releases, learn about [npm dist tags](https://docs.npmjs.com/cli/dist-tag), and [how they relate to semantic versioning](https://docs.npmjs.com/getting-started/using-tags).