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
1. Writes [content.lite.json](/content.lite.json) with the same thing minus file contents.

The copied and generated files are [ignored](/.gitignore) for two reasons:

1. Keeps the git history uncluttered.
1. Prevents humans from accidentally editing auto-generated files

## HTML Frontmatter

Read all about it on the [html-frontmatter](https://www.npmjs.org/package/html-frontmatter) README.

If a file has a `title` property in its frontmatter, it will be used for
the `<title>` of the rendered HTML page. If `title` is absent from the
frontmatter, the filename (without the .md extension) is used.

## Webservice

The [content.json](/content.json) file is served publicly at `/content.json`
with CORS support, allowing browsers on other domains to fetch all the npm
documentation and accompanying metadata with a single HTTP call.

The `content` property in each page object is Base64 encoded so it doesn't
break JSON.

## Deployment

```sh
export NODE_ENV=production
```
