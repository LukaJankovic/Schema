var langOpen = false;

$(function() {
  $("#lang-button").click(function() {
    if (langOpen == false) {
      $("#lang-menu").attr("class", "md-menu md-menu__shown");
      langOpen = true;
    } else {
      $("#lang-menu").attr("class", "md-menu md-menu__hidden");
      langOpen = false;
    }
  })
})
