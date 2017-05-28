$(function() {

  if (window.location.href.indexOf("menu") > -1) {
    history.back();
  }

  $("#menu-schema").click(function() {
    window.location.href = "https://lserver.alite.am/apps/schema";
  });

  $("#menu-skolmat").click(function() {
    window.location.href = "https://lserver.alite.am/apps/schema/skolmat.html";
  });

  $("#menu-settings").click(function() {
    window.location.href = "https://lserver.alite.am/apps/schema/settings.html";
  });

  $("#menu-about").click(function() {
    window.location.href = "https://lserver.alite.am/apps/schema/about.html";
  });
})
