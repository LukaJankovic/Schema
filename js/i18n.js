$(function() {
  $.i18n().load({
    'en': 'res/i18n/en.json',
    'se': 'res/i18n/se.json'
  }).done(function() {
    $.i18n().locale = getLanguage();
    $("body").i18n();
  });
})
