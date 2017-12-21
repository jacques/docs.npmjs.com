<!--
title: 15 - How to label packages with dist-tags
featured: true
-->

# How to Label Packages with Dist-tags 

Distribution tags (dist-tags) supplement [semantic versioning](http://semver.org/) (e.g., v0.12). Use them to  organize and label different versions of packages. In addition to being more human-readable than semver numbering, tags allow publishers to distribute their packages more effectively.

## Adding tags

To add a tag to a specific version of your package, use:

`npm dist-tag add <pkg>@<version> [<tag>]`

## Publishing with tags

By default, `npm publish` will tag your package with the `latest` tag. If you
use the `--tag` flag, you can specify another tag to use. For example, the
following will publish your package with the `beta` tag:

```
npm publish --tag beta
```

## Installing with tags

Like `npm publish`, `npm install <pkg>` will use the `latest` tag by default.
To override this behavior, use `npm install <pkg>@<tag>`. The following example will install the `somepkg` at the version that has been tagged with `beta`.

```
npm install somepkg@beta
```

## Caveats

Because dist-tags share the same namespace as semver, avoid using tag
names that may cause a conflict. The best practice is to avoid using tags
beginning with a number or the letter "v".

##Learn More

See [this CLI doc](https://docs.npmjs.com/cli/dist-tag) for more about tags.
See [Chapter 13](https://docs.npmjs.com/getting-started/semantic-versioning) for more about semantic versioning. 