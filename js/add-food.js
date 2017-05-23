$(function() {
  $("#add").click(function() {

    $.getJSON('https://lserver.alite.am/apps/schema/res/skolmat.json', function(data) {

      let schoolID = "";
      let id = "";

      for (var i = 0; i < data.length; i++) {
        if ($("#add-skola").val() == (data[i].name + " (" + data[i].city + ")")) {
          schoolID = data[i].name;
          id = data[i].link;
        }
      }

      addSchool(schoolID, id);

      window.location.href = "https://lserver.alite.am/apps/schema/skolmat.html";
    });
  });

    $("#cancel, #back-button").click(function() {
        window.location.href = "https://lserver.alite.am/apps/schema/skolmat.html";
    });
})
