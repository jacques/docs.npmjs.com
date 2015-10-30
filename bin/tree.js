#!/usr/bin/env node

// Walk the content directory looking for markdown files
// and build an object of all the pages and sections (directories)

var path = require('path')
var fs = require('fs')
var strftime = require('strftime')
var marky = require('marky-markdown')
var frontmatter = require('html-frontmatter')
var mansplain = require('mansplain')
var _ = require('lodash')

var merge = _.merge

var contentFile = path.resolve(__dirname, '../content.json')

// Flesh out the content object
var content = {
  sections: require('../sections.json'),
  pages: []
}

// Walk around looking for pages
var emitter = require('walkdir')(path.resolve(__dirname, '../content/'))

emitter.on('file', function (filepath, stat) {
  // We only want markdown files
  if (!filepath.match(/\.md$/)) return

  var page = {
    title: null,
    heading: null,
    subtitle: null,
    section: null,
    href: null,
    filename: filepath.replace(/.*\/content\//, ''),
    modified: null,
    modifiedPretty: null,
    edit_url: 'https://github.com/npm/npm/edit/master/doc/cli/npm-bugs.md',
    content: fs.readFileSync(filepath, 'utf-8')
  }

  // Get modified date
  page.modified = fs.statSync(filepath).mtime
  page.modifiedPretty = strftime('%B %d, %Y', page.modified)

  // Look for HTML frontmatter
  merge(page, frontmatter(page.content))

  // Look for man-pagey frontmatter
  var manPattern = new RegExp('^(.*) -- (.*)\\n=+\\n')
  if (page.content.match(manPattern)) {
    var manHead = manPattern.exec(page.content)
    // remove man style (#) from title
    var title = manHead[1].substring(0, manHead[1].length - 3)
    page.heading = title
    page.subtitle = manHead[2]
    page.content = page.content.replace(manHead[0], '')
  }

  // Titlecase some headings from the npm/npm docs
  page.content = page.content
    .replace(/## SYNOPSIS/g, '## Synopsis')
    .replace(/## DESCRIPTION/g, '## Description')
    .replace(/## CONFIGURATION/g, '## Configuration')
    .replace(/## SEE ALSO/g, '## See Also')

  // Convert markdown to HTML
  page.content = marky(page.content, {
    sanitize: false, // allow script tags and stuff
    prefixHeadingIds: false // don't apply safe prefixes to h1/h2... DOM ids
  }).html()

  // Convert npm-cmd(#) style "links" to anchor elements"
  var prefix_hash = { 1: 'cli', 5: 'files', 7: 'misc' }
  page.content = mansplain({ input: page.content, prefix: prefix_hash })

  // Infer section from top directory
  if (page.filename.match(/\//)) {
    page.section = page.filename.split('/')[0]
  }

  // In what repository does this doc live?
  if (['cli', 'files', 'misc'].indexOf(page.section) > -1) {
    page.edit_url = 'https://github.com/npm/npm/edit/master/doc/' + page.filename
  } else if (page.section === 'policies') {
    page.edit_url = 'https://github.com/npm/policies/edit/master/' + path.basename(page.filename)
  } else if (page.section) {
    page.edit_url = 'https://github.com/npm/docs/edit/master/content/' + page.filename
  }

  page.href = '/' + page.filename
      .replace(/\/npm-/, '/')
      .replace(/\.md$/, '')

  // Use href as title if not specified in frontmatter
  if (!page.title) {
    page.title = path.basename(page.href)
  }

  content.pages.push(page)
})

emitter.on('end', function () {
  content.pages = _.sortBy(content.pages, function (page) {
    return page.title.toLowerCase()
  })

  fs.writeFileSync(contentFile, JSON.stringify(content, null, 2))
  console.log('Wrote %s', path.relative(process.cwd(), contentFile))
})
