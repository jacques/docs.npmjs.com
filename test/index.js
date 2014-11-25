var assert = require("assert")
var some = require("lodash").some
var cheerio = require("cheerio")

describe("content", function() {

  var content

  beforeEach(function() {
    content = require("../content.json")
  })

  it("is an object", function() {
    assert(content)
    assert.equal(typeof content, 'object')
  })

  it("is has a sections array", function() {
    assert(content.sections)
    assert(Array.isArray(content.sections))
  })

  it("is has a pages array", function() {
    assert(content.pages)
    assert(Array.isArray(content.pages))
  })

  describe("section", function() {

    it("always has a title", function() {
      assert(content.sections.length)
      content.sections.forEach(function(section){
        assert(section.title)
      })
    })

    it("always has an id", function() {
      assert(content.sections.length)
      content.sections.forEach(function(section){
        assert(section.id)
      })
    })

  })

  describe("page", function() {

    it("always has a title", function() {
      assert(content.pages.length)
      content.pages.forEach(function(page){
        assert(page.title)
      })
    })

    it("always has an href", function() {
      assert(content.pages.length)
      content.pages.forEach(function(page){
        assert(page.href)
        assert.equal(page.href.slice(0,1), "/")
      })
    })

    it("always has content", function() {
      assert(content.pages.length)
      content.pages.forEach(function(page){
        assert(page.content)
        assert.equal(typeof(page.content), "string")
      })
    })

    it("always has a modified date", function() {
      assert(content.pages.length)
      content.pages.forEach(function(page){
        assert(page.modified)
        assert(page.modified.match(/\d{4}-\d{2}-/))
      })
    })

    it("always has a section that corresponds to an id in the sections array", function() {
      var section_ids = content.sections.map(function(section){
        return section.id
      })
      assert(content.pages.length)
      content.pages.forEach(function(page){
        assert(page.section, "page has section property")
        assert(section_ids.indexOf(page.section) > -1, "page doesn't have a section: "+page.title)
      })
    })

  })

  describe("youtube videos", function() {
    var iframeSelector = "div.youtube-video iframe"
    var pagesWithYoutubes

    before(function() {
      pagesWithYoutubes = content.pages.filter(function(page) {
        return cheerio.load(page.content)(iframeSelector).length > 0
      })
    })

    it("wraps youtube iframes in a container element for stylability", function() {
      assert(pagesWithYoutubes.length > 0)
    })

    it("removes width and height property from youtube iframes", function() {
      pagesWithYoutubes.forEach(function(page){
        var iframe = cheerio.load(page.content)(iframeSelector)
        assert(iframe.attr("src"))
        assert(!iframe.attr("width"))
        assert(!iframe.attr("height"))
      })
    })

  })

})
