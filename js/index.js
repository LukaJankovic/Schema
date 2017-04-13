let loadSchemaFavourites;

$(function() {
    $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {

        $("#skolor").append("<!--[if lte IE 9]><select data-datalist='skolor'><![endif]-->")
        for (let i = 0; i < data.length; i++) {
            $("#skolor").append($("<option></option>").attr("value", data[i].namn + " (" + data[i].stad + ")"));
        }
        $("#skolor").append("<!--[if lte IE 9]></select><![endif]-->");

        loadPolyfill();
        loadSchemaFavourites();
    });
});

loadSchemaFavourites = function() {

    $("#favourites-menu").empty();

    for (var i = 0; i < getSchemaFavourites().length; i++) {
        let fav = $("<div class='md-menu-item'><p>" + getSchemaFavourites()[i].name + " - " + getSchemaFavourites()[i].id + "</p><div class='fav-item-actions'><i class='material-icons'>star_border</i><i class='material-icons delete-item' id="+i+">delete</i></div></div>");
        $("#favourites-menu").append(fav);
    }

    $(".delete-item").click(function(sender) {
        deleteClass($(sender.target).attr("id"));
        loadSchemaFavourites();
    })
}

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        hideDialog();
        closeMenu();
    }
});
