var express = require("express")
var hbs = require("hbs")
var harp = require("harp")
var path = require("path")
var cors = require("cors")
var distance = require("leven")
var find = require("lodash").find
var merge = require("lodash").merge
var sortBy = require("lodash").sortBy

// Load section and page data
var content = require(path.resolve(__dirname, "content.json"))
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

  if (!page) {

    var ctx = {
      url: req.url,
      pageId: "fourohfour",
      content: content
    }

    // Find pages with similar HREFs
    var suggestions = content.pages
      .filter(function(page) {
        return distance(req.path, page.href) < 4
      })

    suggestions = sortBy(suggestions, function(page) {
      return distance(req.path, page.href)
    })
      .slice(0,3)

    suggestions.forEach(function(suggestion){
      console.log(suggestion.href, distance(suggestion.href, req.path))
    })

    if (suggestions.length) {
      ctx.suggestions = suggestions
      ctx.suggestionCount = suggestions.length
    }

    return res.status(404).render("404", ctx)
  }

  res.render("page", {
    page: page,
    content: content
  })

})

if (!module.parent) {
  app.listen(app.get("port"), function() {
    console.log("Running at localhost:" + app.get("port"))
  })
}
