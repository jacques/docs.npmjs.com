var express = require("express")
var hbs = require("hbs")
var harp = require("harp")
var path = require("path")
var cors = require("cors")
var find = require("lodash").find
var merge = require("lodash").merge
var isNumber = require("lodash").isNumber
var sortBy = require("lodash").sortBy
var every = require("lodash").every

// Load section and page data
var content = require(path.resolve(__dirname, "content.json"))

// Copy pages into their sections and sort them by order or title
content.sections.forEach(function(section){
  section.pages = content.pages.filter(function(page) {
    return section.id == page.section
  })

  // Sort section pages by order if every page has an order
  if (every(section.pages, 'order')) {
    section.pages = sortBy(section.pages, function(page) {
      return Number(page.order)
    })
  }
})

var lite = merge({}, content)
lite.pages = lite.pages.map(function(page){
  delete page.content
  return page
})

// Configure Express
var app = express()
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

app.get("/content.json", cors(), function(req, res) {
  res.json(content)
})

app.get("/content.lite.json", cors(), function(req, res) {
  res.json(lite)
})

app.get("/*", function(req, res) {
  var page = find(content.pages, function(page) {
    return page.href === req.path
  })

  res.render("page", {
    page: page,
    content: content
  })
})

app.listen(app.get("port"), function() {
  console.log("Running at localhost:" + app.get("port"))
})
