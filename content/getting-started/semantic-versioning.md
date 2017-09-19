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
* Bug fixes and other minor changes: Patch release, increment the last number, e.g. 1.0.1.
* New features which don't break existing features: Minor release, increment the middle number, e.g. 1.1.0.
* Changes which break backwards compatibility: Major release, increment the first number, e.g. 2.0.0.

## Semver for consumers

As a consumer, you can specify which kinds of updates your app can accept in the `package.json` file.

If you were starting with a package 1.0.4, this is how you would specify the ranges:
* Patch releases: `1.0` or `1.0.x` or `~1.0.4`
* Minor releases: `1` or `1.x` or `^1.0.4`
* Major releases: `*` or `x`

You can also specify more [granular semver ranges](/misc/semver).
