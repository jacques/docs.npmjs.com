# [docs.npmjs.com](https://docs.npmjs.com)

learn you some npm for great good

[![Build Status](https://travis-ci.org/npm/docs.svg?branch=master)](https://travis-ci.org/npm/docs)
[![Code Climate](https://codeclimate.com/github/npm/docs/badges/gpa.svg)](https://codeclimate.com/github/npm/docs)
[![David-DM](https://david-dm.org/npm/docs.svg)](https://david-dm.org/npm/docs)
[![Issue Stats](http://issuestats.com/github/npm/docs/badge/pr)](http://issuestats.com/github/npm/docs)
[![Issue Stats](http://issuestats.com/github/npm/docs/badge/issue)](http://issuestats.com/github/npm/docs)

## Editing Content

All the markdown files can be found in the [content](content) directory. Some of these files live here in this repository, others live in other repositories and are imported during the build process. These imported files are [ignored by git](.gitignore) to prevent people from accidentally editing the wrong files.

### In this repo
- [Getting Started](content/getting-started)
- [How npm Works](content/how-npm-works)
- [Private Modules](content/private-modules)
- [Organizations](content/orgs)
- [npm Enterprise](content/enterprise)

### Copied from npm/npm
- [CLI commands](https://github.com/npm/npm/tree/master/doc/cli)
- [Configuring npm](https://github.com/npm/npm/tree/master/doc/files)
- [Using npm](https://github.com/npm/npm/tree/master/doc/misc)

## HTML Frontmatter for Page Metadata

This site uses [html-frontmatter](https://www.npmjs.org/package/html-frontmatter) to add
metadata to pages.

### title

If a file has a `title` property in its frontmatter, it will be used for
the `<title>` of the rendered HTML page. If `title` is absent from the
frontmatter, the filename (without the .md extension) is used.

### order

Pages are sorted alphabetically by default, but the page order per section
can be overridden by using a numerical `order` frontmatter property. It is
not necessary to order all pages in a section: Any pages in a section that
don't have an `order` property will be relegated to the end of that section.

## Redirects

If you rename or remove a file, add it to [lib/redirects.js](lib/redirects.js) to keep
things from breaking.

## Sections

If you rename a directory inside the `content` directory, you'll need to change it in [sections.json](/sections.json) to allow the [content.json](/content.json) to pick up the changes.

## Development

Download node at [nodejs.org](https://nodejs.org) and install it, if you haven't already.

To run the app locally:

```sh
npm install
npm run dev
```
Now you have a server running [nodemon](https://www.npmjs.com/package/nodemon) at [localhost:5000](http://localhost:5000).

NOTE: If you are using `iojs`, or Node versions 4 or 5, on a Linux or OSX box,
you will need to do the following steps:
```
$ sudo add-apt-repository -y ppa:ubuntu-toolchain-r/test
$ sudo apt-get update -qq
$ sudo apt-get install -qq -y g++-4.8
$ sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.8 50
```

NOTE: If you have changed Node.js versions and are still getting
and error on a supported version of Node.js, you may need to rebuild npm:

```
$ npm rebuild
```

## The Build Process

The build is run automatically after every `npm install` and before `npm start`. Here's an overview of what it does.

1. Copies [npm documentation](https://github.com/npm/npm/tree/master/doc) from `./node_modules/npm/doc` to `./content`
1. Walks the [content directory](/content) collecting markdown files.
1. Reads the contents of each markdown file.
1. Parses [HTML Frontmatter](#html-frontmatter) from the markdown files
1. Converts markdown to HTML
1. Writes [content.json](/content.json) with HTML content of each file included.

The copied and generated files are [ignored](/.gitignore) for two reasons:

1. Keeps the git history uncluttered.
1. Prevents humans from accidentally editing auto-generated files

## Webservice

The [content.json](/content.json) file is served publicly at `/content.json`
with CORS support, allowing browsers on other domains to fetch all the npm
documentation and accompanying metadata with a single HTTP call.

## Tests

```sh
npm install
npm test
```

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Deployment

```sh
git push origin +master:deploy-staging
git push origin +master:deploy-production
```

If you get dissed with an "Everything up-to-date" message, make an empty commit and push again:

```
git commit -avm "emptiness" --allow-empty
```
