var favOpen = false;
var weekOpen = false;

$(function() {

    $("#fav-container").click(function(event) {
        event.stopPropagation();
    })

    $("#week-container").click(function(event) {
        event.stopPropagation();
    })

    $("#star-button").click(function() {

        if (weekOpen == true) {
            $("#week-menu").attr("class", "md-menu md-menu__hidden");
            weekOpen = false;
        }

        if (favOpen == true) {
            $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
            favOpen = false;
        } else {
            $("#favourites-menu").attr("class", "md-menu md-menu__shown");
            favOpen = true;
        }
    });

    $("#week-button").click(function() {

        if (favOpen == true) {
            $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
            favOpen = false;
        }

        if (weekOpen == true) {
            $("#week-menu").attr("class", "md-menu md-menu__hidden");
            weekOpen = false;
        } else {
            $("#week-menu").attr("class", "md-menu md-menu__shown");
            weekOpen = true;
        }
    })

    $(window).click(function() {
        if (favOpen == true) {
            $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
            favOpen = false;
        }

        if (weekOpen == true) {
            $("#week-menu").attr("class", "md-menu md-menu__hidden");
            weekOpen = false;
        }
    })
})
