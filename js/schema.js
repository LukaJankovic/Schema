$(window).resize(function() {
    loadSchema();
})

$(window).on("orientationchange", function() {
    loadSchema();
})

loadSchema = function() {
    if ($(window).width() > 768) {
        $(".desktop-image").attr("src", "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=" + getSchemaFavourites()[selected]["school"] + "/sv-se&type=0&id=" + getSchemaFavourites()[selected]["id"] + "&period=&week=18&mode=0&printer=0&colors=2&head=1&clock=1&foot=1&day=0&width=" + Math.floor($(".desktop-image").outerWidth()) + "&height=" + Math.floor($(".desktop-image").outerHeight()) + "&count=1&decrypt=0");
    } else {
        for (var i = 0; i < 5; i++) {
            $("." + i).attr("src", "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=" + getSchemaFavourites()[selected]["school"] + "/sv-se&type=0&id=" + getSchemaFavourites()[selected]["id"] + "&period=&week=18&mode=0&printer=0&colors=2&head=1&clock=1&foot=1&day=" + Math.pow(2, i) + "&width=" + Math.floor($(".mobile-image").outerWidth()) + "&height=" + Math.floor($(".mobile-image").outerHeight()) + "&count=1&decrypt=0");
        }
    }
}
