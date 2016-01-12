<!--
title: 15 - Using tags
featured: true
-->

# Using dist-tags

Tags are a supplement to [semver](http://semver.org/) (e.g., v0.12) for
organizing and labeling different versions of packages. In addition to being
more human-readable, tags allow publishers to distribute their packages more
effectively.

## Adding tags

To add a tag to a specific version of your package, use
`npm dist-tag add <pkg>@<version> [<tag>]`. See
[the CLI docs](https://docs.npmjs.com/cli/dist-tag) for more information.

## Publishing with tags

By default, `npm publish` will tag your package with the `latest` tag. If you
use the `--tag` flag, you can specify another tag to use. For example, the
following will publish your package with the `beta` tag:

```
npm publish --tag beta
```

## Installing with tags

Like `npm publish`, `npm install <pkg>` will use the `latest` tag by default.
To override this behavior, use `npm install <pkg>@<tag>`. The following example
will install the `somepkg` at the version that has been tagged with `beta`.

```
npm install somepkg@beta
```

## Caveats

Because dist-tags share the same namespace with semver, avoid using any tag
names that may cause a conflict. The best practice is to avoid using tags
beginning with a number or the letter "v".
