#!/usr/bin/env node

// Walk the content directory looking for markdown files
// and build an object of all the pages and sections (directories)

var path        = require("path")
var fs          = require("fs")
var marked      = require("marked")
var fmt         = require("util").format
var strftime    = require("strftime")
var cheerio     = require("cheerio")
var _           = require("lodash")
var compact     = _.compact
var uniq        = _.uniq
var pluck       = _.pluck
var merge       = _.merge
var fm          = require("html-frontmatter")
var contentFile = path.resolve(__dirname, "../content.json")

// Flesh out the content object
var content = {
  sections: [
    {id: "getting-started", title: "Getting Started"},
    {id: "misc", title: "Using npm"},
    {id: "enterprise", title: "npm Enterprise"},
    {id: "cli", title: "CLI Commands"},
    {id: "files", title: "Configuring npm"},
    {id: "api", title: "Using npm programmatically"},
  ],
  pages: []
}

// Walk around looking for pages
var emitter = require("walkdir")(path.resolve(__dirname,  "../content/"))

emitter.on("file", function(filename,stat){

  // We only want markdown files
  if (!filename.match(/\.md$/)) return

  var page = {}
  page.content = fs.readFileSync(filename).toString()

  // Look for HTML frontmatter
  merge(page, fm(page.content))

  // Look for man-pagey frontmatter
  var manPattern = new RegExp("^(.*) -- (.*)\n=+\n")
  if (page.content.match(manPattern)) {
    var manHead = manPattern.exec(page.content)
    page.heading = manHead[2]
    page.content = page.content.replace(manHead[0], "")
  }

  // Get modified date
  page.modified = fs.statSync(filename).mtime
  page.modifiedPretty = strftime("%B %d, %Y", page.modified)

  // Titlecase some things
  page.content = page.content
    .replace(/## SYNOPSIS/g, "## Synopsis")
    .replace(/## DESCRIPTION/g, "## Description")
    .replace(/## CONFIGURATION/g, "## Configuration")
    .replace(/## SEE ALSO/g, "## See Also")

  // Convert markdown to HTML
  page.content = marked(page.content)

  // Wrap YouTube videos so they can be styled.
  var $ = cheerio.load(page.content)
  $('iframe[src*="youtube.com"]').each(function(i, elem) {
    $(this).removeAttr("width")
    $(this).removeAttr("height")
    $(this).before(fmt("<div class='youtube-video'>%s</div>", $(this).toString()));
    $(this).remove()
  });

  page.content = $.html()

  // Remove basepath and extension from filename
  filename = filename
    .replace(/.*\/content\//, "")
    .replace(/\.md$/, "")

  // Use filename as title if not specified in frontmatter
  // (and remove superfluous npm- prefix)
  if (!page.title)
    page.title = path.basename(filename).replace(/^npm-/, "")

  // Infer section from top directory
  if (filename.match(/\//))
    page.section = filename.split("/")[0]

  if (["api", "cli", "files", "misc"].indexOf(page.section) > -1) {
    page.edit_url = "https://github.com/npm/npm/edit/master/doc/" + filename + ".md"
  } else if (page.section) {
    page.edit_url = "https://github.com/npm/docs.npmjs.com/edit/master/content/" + filename + ".md"
  }

  page.href = "/" + filename.replace(/\/npm-/, "/")

  content.pages.push(page)

})


emitter.on("end",function(){

  content.pages = _.sortBy(content.pages, function(page) {
    return page.title.toLowerCase();
  })

  fs.writeFileSync(contentFile, JSON.stringify(content, null, 2))
  console.log("Wrote %s", path.relative(process.cwd(), contentFile))


})
