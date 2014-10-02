# [docs.npmjs.com](https://docs.npmjs.com)

The place where all things npm will one day be documented

## Development

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

To run the app locally:

```sh
npm install
npm start
```

Now you have a server running at at [localhost:5000](http://localhost:5000)

## The Build Process

The `prepublish` task is run automatically after `npm install`. This
triggers `npm run build`, which does the following:

1. Copies [npm documentation](https://github.com/npm/npm/tree/master/doc) from `./node_modules/npm/doc` to `./content`
1. Walks the [content directory](/content) collecting markdown files.
1. Reads the contents of each markdown file.
1. Parses [HTML Frontmatter](#html-frontmatter) from the markdown files
1. Converts markdown to HTML
1. Writes [content.json](/content.json) with Base64-encoded markdown contents AND HTML contents
1. Writes [views/partials/nav.hbs](/views/partials/nav.hbs)

The copied and generated files are [ignored](/.gitignore) for two reasons:

1. Keeps the git history uncluttered.
1. Prevents humans from accidentally editing auto-generated files

## HTML Frontmatter

When the build process runs, it looks for metadata in markdown files in the following format:

```html
<!--
title: GitHub integration
keywords: github, git, enterprise
description: If your organization uses GitHub or GitHub Enterprise, npmE can be configured
  to automatically use them for login and access control.
-->
```

See an example in [content/enterprise/github.md](/content/enterprise/github.md).

This metadata is then added to [content.json](/content.json), and looks like this:

```json
{
  "title": "GitHub integration",
  "keywords": "github, git, enterprise",
  "description": "If your organization...etc"
}
```

If the file has a `title` property in its frontmatter, it will be used for
the `<title>` of the rendered HTML page. If `title` is absent from the
frontmatter, the filename (without the .md extension) is used.

Frontmatter values can span multiple lines for longer strings like
description text. To make a value multiline, simply indent it with two or
more spaces on subsequent lines.  

## Webservice

The [content.json](/content.json) file is served publicly at `/content.json`
with CORS support, allowing browsers on other domains to fetch all the npm
documentation and accompanying metadata with a single HTTP call.

## Deployment

```sh
export NODE_ENV=production
```
