var week = 0;

$(function() {

  week = getWeekNumber(new Date());
  $("#schema-week").val(week);

  $("#schema-week").bind('keyup mouseup', function() {
    week = $("#schema-week").val();

    if (week == "") {
      week = 1;
    } else if (week > 52) {
      week = 52;
      $("#schema-week").val(week);
    }

    loadSchema();
  });

  for (var i = 0; i < 4; i++) {
      $("."+i+"-header").html("Vecka "+parseInt(week+i));
  }

  $("#this-week").click(function() {
    week = getWeekNumber(new Date());
    $("#schema-week").val(week);
    loadSchema();
  });

  $.getJSON('https://lserver.alite.am/apps/schema/res/skolmat.json', function(data) {

    $("#skolor").append("<!--[if lte IE 9]><select data-datalist='skolor'><![endif]-->")
    for (var i = 0; i < data.length; i++) {
      $("#skolor").append($("<option></option>").attr("value", data[i].name + " (" + data[i].city + ")"));
    }
    $("#skolor").append("<!--[if lte IE 9]></select><![endif]-->");

    loadPolyfill();
    loadSchemaFavourites();
  });

  loadSchemaFavourites = function() {

    $("#favourites-menu").empty();

    for (var i = 0; i < getFoodFavourites().length; i++) {

      var fav = $("<li class='md-menu-item'><p class='select-schema-item' id=" + i + ">" + getFoodFavourites()[i].school + "</p><div class='fav-item-actions'><i class='material-icons delete-schema-item' id=" + i + ">delete</i></div></li>");

      if (i == selected) {
        fav.attr("class", "md-menu-item__selected");
      }

      $("#favourites-menu").append(fav);
    }

    $(".delete-schema-item").click(function(sender) {
      deleteSchool($(sender.target).attr("id"));
      loadSchemaFavourites();
    });

    $(".select-schema-item").click(function(sender) {
      selected = $(sender.target).attr("id");

      loadSchemaFavourites();
      loadSchema();

      $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
      favOpen = false;

    });
  }

  $("#add").click(function() {

    $.getJSON('https://lserver.alite.am/apps/schema/res/skolmat.json', function(data) {

      var schoolID = "";
      var id = "";

      for (var i = 0; i < data.length; i++) {
        if ($("#add-skola").val() == (data[i].name + " (" + data[i].city + ")")) {
          schoolID = data[i].name;
          id = data[i].link;
        }
      }

      addSchool(schoolID, id);

      hideDialog();
      loadSchemaFavourites();
    });
  });

  loadSchema = function() {

    for (var i = 0; i < 4; i++) {
        $("."+i+"-header").html("Vecka "+parseInt(week+i));
    }

    $.getJSON('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://skolmaten.se' + getFoodFavourites()[selected]["id"] + '?&offset='+parseInt(week - getWeekNumber(new Date()))+'&limit=3&fmt=json'), function(data) {
      for (var i = 0; i < 5; i++) {
        if (data.weeks[0].days[i].items) {
          for (var b = 0; b < data.weeks[0].days[i].items.length; b++) {
              $(".1-" + i).append("<li>"+data.weeks[0].days[i].items[b]+"</li>")
          }
        } else {
          $(".1-" + i).html("Ingen data");
        }
      }

      for (var a = 2; a < 4; a++) {
        for (var i = 0; i < 5; i++) {
          if (data.weeks[a - 1].days[i].items) {
            for (var b = 0; b < data.weeks[a - 1].days[i].items.length; b++) {
                $("." + a + "-1-" + i).append("<li>"+data.weeks[a - 1].days[i].items[b]+"</li>")
            }
          } else {
            $("." + a + "-1-" + i).html("Ingen data");
          }
        }
      }
    });
  }
})

getWeekNumber = function(d) {
  d = new Date(+d);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  var yearStart = new Date(d.getFullYear(), 0, 1);
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}
