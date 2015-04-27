var distance = require('leven')
var sortBy = require('lodash').sortBy

module.exports = function (input, pages) {
  var maxDistance = 3
  var maxResults = 3

  var suggestions = pages.filter(function (page) {
    return distance(input, page.href) <= maxDistance
  })

  suggestions = sortBy(suggestions, function (page) {
    return distance(input, page.href)
  }).slice(0, maxResults)

  suggestions = suggestions.map(function (page) {
    page.hrefWithoutSlash = page.href.replace(/^\//, '')
    return page
  })

  return suggestions
}
