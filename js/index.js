let loadSchemaFavourites;
let selected = 0;

$(window).on('popstate', function() {

    console.log(location.pathname);

    if (location.pathname == '/apps/schema/menu') {
        openMenu();
    } else {
        closeMenu();
    }
});

$(function() {

    if (window.navigator.standalone) {
        $("meta[name='apple-mobile-web-app-status-bar-style']").remove();
        $('body').prepend("<div style='height: 20px;width: 100%;background-color: #1976D2;'></div>");
    }

    $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {

        $("#skolor").append("<!--[if lte IE 9]><select data-datalist='skolor'><![endif]-->")
        for (let i = 0; i < data.length; i++) {
            $("#skolor").append($("<option></option>").attr("value", data[i].namn + " (" + data[i].stad + ")"));
        }
        $("#skolor").append("<!--[if lte IE 9]></select><![endif]-->");

        loadPolyfill();
        loadSchemaFavourites();
    });

    selected = getSchemaFavourite();
});

loadSchemaFavourites = function() {

    $("#favourites-menu").empty();

    for (var i = 0; i < getSchemaFavourites().length; i++) {

        let star = "star_border";
        let color = "black";

        if (i == getSchemaFavourite()) {
            star = "star";
            color = "star";
        }

        let fav = $("<div class='md-menu-item'><p class='select-schema-item' id=" + i + ">" + getSchemaFavourites()[i].name + " - " + getSchemaFavourites()[i].id + "</p><div class='fav-item-actions'><i class='favourite-schema-item material-icons " + color + "' id=" + i + ">" + star + "</i><i class='material-icons delete-schema-item' id=" + i + ">delete</i></div></div>");

        if (i == selected) {
            fav.attr("class", "md-menu-item__selected");
        }

        $("#favourites-menu").append(fav);
    }

    $(".delete-schema-item").click(function(sender) {
        deleteClass($(sender.target).attr("id"));
        loadSchemaFavourites();
    });

    $(".favourite-schema-item").click(function(sender) {
        if (getSchemaFavourite() == $(sender.target).attr("id")) {
            setSchemaFavourite(0);
        } else {
            setSchemaFavourite($(sender.target).attr("id"));
        }

        loadSchemaFavourites();
    })

    $(".select-schema-item").click(function(sender) {
        selected = $(sender.target).attr("id");

        loadSchemaFavourites();
        loadSchema();

        $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
        favOpen = false;

        $("#spinner").attr("class", "spinner spinner__shown");
    })
}

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        hideDialog();
        closeMenu();
    }
});
