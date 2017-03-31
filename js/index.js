var menuOpen = false;
var eventHandled = false;

$(function() {
    $("#md-drawer__trigger").click(function() {

        if ($("#drawer").hasClass("md-drawer__hidden")) {
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white is-active");
            $("#drawer-container").attr("class", "container-drawer-shown");
            $("#drawer").attr("class", "md-drawer md-drawer__shown");
            $("#shade").attr("class", "shade-shown");

            menuOpen = true;
            eventHandled = true;
        } else {
            $("#shade").attr("class", "shade-hidden");
            $("#drawer-container").attr("class", "container-drawer-hidden");
            $("#drawer").attr("class", "md-drawer md-drawer__hidden");
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white");
        }
    })

    $(window).click(function() {
        if (menuOpen && !eventHandled) {
            $("#drawer-container").attr("class", "container-drawer-shown");
            $("#drawer").attr("class", "md-drawer md-drawer__hidden");
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white");
            $("#shade").attr("class", "shade-hidden");
        }
        eventHandled = false;
    })
})
