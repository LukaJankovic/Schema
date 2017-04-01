var menuOpen = false;
var eventHandled = false;
var menuOpening = false;
var xDown;
var xUp;

$(function() {

    //Opening and closing drawer
    $("#md-drawer__trigger").click(function() {

        if ($("#drawer").hasClass("md-drawer__hidden")) {
            openMenu();
            eventHandled = true;
        } else {
            closeMenu();
        }
    })

    $(window).click(function() {
        if (menuOpen && !eventHandled) {
            closeMenu();
        }
        eventHandled = false;
    })

    openMenu = function() {
        $("#drawer").attr("style", "");
        $("#shade").attr("style", "");

        $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white is-active");
        $("#drawer").attr("class", "md-drawer md-drawer__shown");
        $("#shade").attr("class", "shade-shown");

        menuOpen = true;
    }

    closeMenu = function() {
        $("#drawer").attr("style", "");
        $("#shade").attr("style", "");

        $("#shade").attr("class", "shade-hidden");
        $("#drawer").attr("class", "md-drawer md-drawer__hidden");
        $("#md-drawer__trigger").attr("class", "hamburger hamburger--arrow white");

        menuOpen = false;
    }

    //Sliding drawer
    $(document).on("touchstart", function(e) {
        let x = getX(e);

        xDown = x;

        if (!menuOpen) {
            if (x < 32) {
                menuOpening = true;
            }
        } else {
            menuOpening = false;
        }
    })

    $(document).on("touchmove", function(e) {
        let x = getX(e);
        let left;

        if (menuOpening == true) {
            left = Math.min(0, -320 + x - xDown);
        } else {
            left = Math.min(0, x - Math.min(xDown, 320));
        }

        $("#drawer").attr("style", "left:" + parseInt(left) + "px");

        $("#shade").attr("class", "shade-shown");
        $("#shade").attr("style", "background-color: rgba(0, 0, 0, "+((1+(left / 320)) * 0.27)+")");
    })

    $(document).on("touchend", function(e) {
        let x = getX(e);

        let xTravel = xDown - x;

        if (menuOpening == true) {
            if (x > (160)) {
                openMenu();
                menuOpening = false;
            } else {
                closeMenu();
                menuOpening = true;
            }
        } else {
            if (xTravel > (160)) {
                closeMenu();
                menuOpening = true;
            } else {
                openMenu();
                menuOpening = false;
            }
        }
        xDown = null;

    })

    getX = function(ev) {
        if (isset(ev.pageX)) {
            return ev.pageX;
        } else {
            if (ev.touches.length > 0) {
                lastTouch = ev;
                return ev.touches[0].clientX;
            } else if (isset(lastTouch)) {
                return lastTouch.touches[lastTouch.touches.length - 1].clientX;
            }
        }
    }

    function isset(variable) {
        return variable != undefined && variable != null;
    }
})
