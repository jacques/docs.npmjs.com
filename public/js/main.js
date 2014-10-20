$(function() {
  $("nav h2 a").on("click", function(e) {
    $(this).closest("section").toggleClass("active")
    return false
  })
})
