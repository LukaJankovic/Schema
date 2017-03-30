var menuOpen = false;
var eventHandled = false;

$(function() {
    $("#md-drawer__trigger").click(function() {

        if ($("#drawer").hasClass("md-drawer__hidden")) {
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white is-active");
            $("#drawer").attr("class", "md-drawer md-drawer__shown");
            menuOpen = true;
            eventHandled = true;
        }

        else {
            $("#drawer").attr("class", "md-drawer md-drawer__hidden");
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white");
        }
    })
})
