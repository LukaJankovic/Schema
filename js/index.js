var menuOpen = false;
var eventHandled = false;

$(function() {
    $("#md-drawer__trigger").click(function() {

        if ($("#drawer").hasClass("md-drawer__hidden")) {
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white is-active");
            $("#drawer").attr("class", "md-drawer md-drawer__shown");

            $("#shade").attr("class", "shade-shown");

            /*setTimeout(function() {
                $("#shade").css("display", "inherit");
            }, 2000);*/

            menuOpen = true;
            eventHandled = true;
        } else {

            $("#shade").attr("class", "shade-hidden");

            $("#drawer").attr("class", "md-drawer md-drawer__hidden");
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white");

            /*setTimeout(function() {
                $("#shade").css("display", "none");
            }, 200);*/
        }
    })

    $(window).click(function() {
        if (menuOpen && !eventHandled) {
            $("#drawer").attr("class", "md-drawer md-drawer__hidden");
            $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white");

            $("#shade").attr("class", "shade-hidden");

            /*setTimeout(function() {
                $("#shade").css("display", "none");
            }, 200);*/
        }
        eventHandled = false;
    })
})
