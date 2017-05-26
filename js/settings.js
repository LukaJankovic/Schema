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
  });

  $("#lang-english").click(function() {
    $.i18n().load({
      'en': 'res/i18n/en.json',
      'se': 'res/i18n/se.json'
    }).done(function() {
      setLanguage("en");
      $.i18n().locale = "en";
      $("body").i18n();
    });

    $("#lang-menu").attr("class", "md-menu md-menu__hidden");
    langOpen = false;
  });

  $("#lang-swedish").click(function() {
    $.i18n().load({
      'en': 'res/i18n/en.json',
      'se': 'res/i18n/se.json'
    }).done(function() {
      setLanguage("se");
      $.i18n().locale = "se";
      $("body").i18n();
    });

    $("#lang-menu").attr("class", "md-menu md-menu__hidden");
    langOpen = false;
  });

  $("#lang-item").click(function(event) {
    event.stopPropagation();
  });

  $(window).click(function() {
    $("#lang-menu").attr("class", "md-menu md-menu__hidden");
    langOpen = false;
  });

  $("#clear-button").click(function() {
    clear();
    $("#snackbar").attr("class", "md-snackbar");
    setTimeout(function() {
      $("#snackbar").attr("class", "md-snackbar md-snackbar__hidden");
    }, 3000);
  })
})
