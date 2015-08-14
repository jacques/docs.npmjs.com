/* globals describe, it, beforeEach */

var assert = require('assert')
var path = require('path')

describe('content', function () {
  var content

  beforeEach(function () {
    content = require('../content.json')
  })

  it('is an object', function () {
    assert(content)
    assert.equal(typeof content, 'object')
  })

  it('has a sections array', function () {
    assert(content.sections)
    assert(Array.isArray(content.sections))
  })

  it('has a pages array', function () {
    assert(content.pages)
    assert(Array.isArray(content.pages))
  })

  describe('section', function () {
    it('always has a title', function () {
      assert(content.sections.length)
      content.sections.forEach(function (section) {
        assert(section.title)
      })
    })

    it('always has an id', function () {
      assert(content.sections.length)
      content.sections.forEach(function (section) {
        assert(section.id)
      })
    })
  })

  describe('page', function () {
    it('always has a title', function () {
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert(page.title)
      })
    })

    it('always has an href', function () {
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert(page.href)
        assert.equal(page.href.slice(0, 1), '/')
      })
    })

    it('always has content', function () {
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert(page.content, page.filename + ' has no content')
        assert.equal(typeof (page.content), 'string')
      })
    })

    it('always has a modified date', function () {
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert(page.modified)
        assert(page.modified.match(/\d{4}-\d{2}-/))
      })
    })

    it('always has a URL-friendly filename', function () {
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert.equal(
          path.basename(page.filename),
          encodeURIComponent(path.basename(page.filename)),
          'page filename is not its encoded self: ' + page.filename
        )
      })
    })

    it('always has a section that corresponds to an id in the sections array', function () {
      var section_ids = content.sections.map(function (section) {
        return section.id
      })
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert(page.section, 'page has section property')
        assert(section_ids.indexOf(page.section) > -1, "page doesn't have a section: " + page.title)
      })
    })
  })

  describe('edit_url', function () {
    it('is always present', function () {
      assert(content.pages.length)
      content.pages.forEach(function (page) {
        assert(page.edit_url)
      })
    })
  })
})
