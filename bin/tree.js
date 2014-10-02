#!/usr/bin/env node

// Walk the content directory looking for markdown files
// and build an object of all the pages and sections (directories)

var path        = require("path")
var fs          = require("fs")
var marked      = require("marked")
var fmt         = require("util").format
var _           = require("lodash")
var compact     = _.compact
var uniq        = _.uniq
var pluck       = _.pluck
var merge       = _.merge
var fm          = require("html-frontmatter")
var contentFile = path.resolve(__dirname, "../content.json")
var content = {
  sections: [],
  pages: []
}

// Walk the content directory tree
var emitter = require("walkdir")(path.resolve(__dirname,  "../content/"))

emitter.on("file", function(filename,stat){

  // We only want .html and .md files
  if (!filename.match(/\.(md|html)$/)) return

  var page = {}
  page.content = fs.readFileSync(filename).toString()

  // Look for an HTML comment in the file, then parse each
  // colon-delimited line within as metadata
  merge(page, fm(page.content))

  // Convert markdown to HTML
  if (filename.match(/\.md$/))
    page.content = marked(page.content)

  // Base64 encode content so it can be saved as JSON
  page.content = new Buffer(page.content).toString('base64')

  // Clean up the filename
  filename = filename
    .replace(/.*\/content\//, "") // remove basepath
    .replace(/\.md$/, "")         // remove extension

  // Use filename as title if not specified in frontmatter
  // (and remove superfluous npm- prefix)
  if (!page.title)
    page.title = path.basename(filename).replace(/^npm-/, "")

  // Infer section from top directory
  if (filename.match(/\//))
    page.section = filename.split("/")[0]

  page.href = "/" + filename

  content.pages.push(page)

})


emitter.on("end",function(){

  var sections = compact(uniq(pluck(content.pages, 'section'))).sort()

  content.sections = sections.map(function(section) {

    // Look for a page named "index" in this section
    var indexPage = _.find(content.pages, function(page) {
      return path.basename(page.href) === "index" && page.section === section
    })

    return {
      id: section,
      href: "/" + section,
      title: (indexPage ? indexPage.title : section),
      hasIndexPage: !!indexPage
    }
  })

  fs.writeFileSync(contentFile, JSON.stringify(content, null, 2))
  console.log("Wrote %s", path.relative(process.cwd(), contentFile))

})
