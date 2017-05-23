var week = 0;

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

    $("#this-week").click(function() {
        week = getWeekNumber(new Date());
        $("#schema-week").val(week);
        loadSchema();
    });

    $("#add").click(function() {

        $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {

            let schoolID = "";
            let id = "";

            for (var i = 0; i < data.length; i++) {
                if ($("#add-skola").val() == (data[i].namn + " (" + data[i].stad + ")")) {
                    schoolID = data[i].id;
                    name = data[i].namn;
                }
            }

            addClass(schoolID, name, $("#add-klass").val());

            hideDialog();
            loadSchemaFavourites();
        });
    });
})

$(document).resize(function() {
    loadSchema();
})

$(window).on("orientationchange", function() {
    loadSchema();
})

loadSchema = function() {
    if ($(window).width() > 768) {
        $(".desktop-image").attr("src", "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=" + getSchemaFavourites()[selected]["school"] + "/sv-se&type=0&id=" + getSchemaFavourites()[selected]["id"] + "&period=&week=" + week + "&mode=0&printer=0&colors=2&head=1&clock=1&foot=1&day=0&width=" + Math.floor($(".desktop-image").outerWidth()) + "&height=" + Math.floor($(".desktop-image").outerHeight()) + "&count=1&decrypt=0");
    } else {
        for (var i = 0; i < 5; i++) {
            $("." + i).attr("src", "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=" + getSchemaFavourites()[selected]["school"] + "/sv-se&type=0&id=" + getSchemaFavourites()[selected]["id"] + "&period=&week=" + week + "&mode=0&printer=0&colors=2&head=1&clock=1&foot=1&day=" + Math.pow(2, i) + "&width=" + Math.floor($(".mobile-image").outerWidth()) + "&height=" + Math.floor($(".mobile-image").outerHeight()) + "&count=1&decrypt=0");
        }
    }
}

getWeekNumber = function(d) {
    d = new Date(+d);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    var yearStart = new Date(d.getFullYear(), 0, 1);
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}
