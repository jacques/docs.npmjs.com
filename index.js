var express = require("express")
var hbs = require("hbs")
var harp = require("harp")
var path = require("path")
var cors = require("cors")
var find = require("lodash").find
var merge = require("lodash").merge
var isNumber = require("lodash").isNumber
var sortBy = require("lodash").sortBy
var any = require("lodash").any
var suggest = require(__dirname + "/lib/suggestions")
var redirects = require(__dirname + "/lib/redirects")

// Load section and page data
var content = require(path.resolve(__dirname, "content.json"))

// Copy pages into their sections and sort them by order or title
content.sections.forEach(function(section){
  section.pages = content.pages.filter(function(page) {
    return section.id == page.section
  })

  // Sort section pages if any of the pages have an `order` property
  // Pages without the order property will come last
  if (any(section.pages, 'order')) {
    section.pages = sortBy(section.pages, function(page) {
      return Number(page.order || 10000)
    })
  }
})

var lite = merge({}, content)
lite.pages = lite.pages.map(function(page){
  delete page.content
  return page
})

// Configure Express
var app = module.exports = express()
app.set("view engine", "hbs")
app.set("port", (process.env.PORT || 5000))
app.use(express.static(__dirname + "/public"))
app.use(harp.mount(__dirname + "/public"))
hbs.registerPartials(__dirname + "/views/partials")
hbs.registerHelper("equal", require("handlebars-helper-equal"))

app.get("/", function(req, res) {
  res.render("index", {
    content: content,
    recentlyUpdatedPages: [],
    pageId: "index"
  })
})


app.get("/_monitor/ping", cors(), function(req, res) {
  res.status(200).send('pong')
})

app.get("/_monitor/status", cors(), function(req, res) {
  res.json({
    name: "docs",
    pid: process.pid,
    uptime: process.uptime(),
    rss: process.memoryUsage(),
  })
})

app.get("/content.json", cors(), function(req, res) {
  res.json(content)
})

app.get("/content.lite.json", cors(), function(req, res) {
  res.json(lite)
})

app.get("/all", function(req, res) {
  res.render("multi", {
    content: content,
    heading: "All Docs"
  })
})

app.get("/*", function(req, res) {

  if (req.path in redirects) {
    return res.redirect(301, redirects[req.path])
  }

  var page = find(content.pages, function(page) {
    return page.href === req.path
  })

  if (!page) {
    return res.status(404).render("404", {
      url: req.url,
      pageId: "fourohfour",
      content: content,
      suggestions: suggest(req.path, content.pages)
    })
  }

  res.render("page", {
    page: page,
    content: content
  })

})

// This module.parent thing allows us to test the server using
// supertest without unnecessarily firing up the server.
if (!module.parent) {
  app.listen(app.get("port"), function() {
    console.log("Running at localhost:" + app.get("port"))
  })
}
