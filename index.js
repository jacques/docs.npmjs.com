var express = require("express")
var hbs = require("hbs")
var harp = require("harp")
var path = require("path")
var cors = require("cors")
var find = require("lodash").find
var content = require(path.resolve(__dirname, "content.json"))
var contentLite = require(path.resolve(__dirname, "content.lite.json"))

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
  res.json(contentLite)
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
