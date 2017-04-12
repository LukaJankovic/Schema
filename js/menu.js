var favOpen = false;

$(function() {
    $("#fav-container").click(function(event) {

        event.stopPropagation();

        if (favOpen == true) {
            $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
            favOpen = false;
        } else {
            $("#favourites-menu").attr("class", "md-menu md-menu__shown");
            favOpen = true;
        }
    });

    $(window).click(function() {
        if (favOpen == true) {
            $("#favourites-menu").attr("class", "md-menu md-menu__hidden");
            favOpen = false;
        }
    })
})
