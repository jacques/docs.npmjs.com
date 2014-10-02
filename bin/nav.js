#!/usr/bin/env node

// Parse content.json and generate nav.hbs

var fs = require("fs")
var path = require("path")
var fmt = require("util").format
var beautify = require('js-beautify').html
var content = require(__dirname + "/../content.json")
var templateFile = path.resolve(__dirname, "../views/partials/nav.hbs")

var output = content.sections.map(function(section) {
  var out = ""

  // Put the section title in the title tag as well as innerHTML,
  // so lowercased sections that ought to be be uppercase (like API and CLI)
  // can be selected and transformed using CSS. :)
  if (section.hasIndexPage) {
    out += fmt("<h2 title=\"%s\" class=\"hasIndexPage\"><a href=\"%s\">%s</a></h2>", section.href, section.title, section.title)
  } else {
    out += fmt("<h2 title=\"%s\">%s</h2>", section.title, section.title)
  }

  out += content.pages
    .filter(function(page) {
      return page.section && page.section === section.id
    })
    .map(function(page) {
      return fmt("<a href=\"%s\" class=\"sublink\">%s</a>", page.href, page.title)
    })
    .join("\n")

  return fmt("<section id=\"nav-%s\">%s</section>", section.id, out)

}).join("\n\n")

output = beautify(output)

fs.writeFileSync(templateFile, output)

console.log("Wrote %s", path.relative(process.cwd(), templateFile))
