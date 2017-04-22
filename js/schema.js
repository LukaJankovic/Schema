let minuteHeight;
let scheduleWidth;
let currentLessons;

$(function() {
    minuteHeight = ($(document).height() - 96) / 630;
    scheduleWidth = parseInt($(".day").css("width"), 10);
});

$(window).resize(function() {

    clearSchema();
    minuteHeight = ($(document).height() - 96) / 630;
    scheduleWidth = parseInt($(".day").css("width"), 10);

    console.log(scheduleWidth);

    for (var i = 0; i < currentLessons.length; i++) {
        generateDivForDay(currentLessons[i], i);
    }
})

clearSchema = function() {
    $(".schema-item").remove();
    $(".schema-spacer").remove();
}

loadSchema = function() {

    currentLessons = [];
    clearSchema();

    $.getJSON('https://jobb.matstoms.se/ali/api/getjson.php?week=12&scid=' + getSchemaFavourites()[selected]["school"] + '&clid=' + getSchemaFavourites()[selected]["id"] + '&getweek=1', function(data) {
        for (var i = 0; i < data.days.length; i++) {
            let lessons = [];
            for (var a = 0; a < data.days[i].lessons.length; a++) {

                if (lessons.length == 0) {
                    lessons.push({
                        info: data.days[i].lessons[a].info,
                        start: data.days[i].lessons[a].startmin,
                        end: data.days[i].lessons[a].endmin,
                        startt: data.days[i].lessons[a].start,
                        endt: data.days[i].lessons[a].end,
                        subject: data.days[i].lessons[a].subject
                    });
                } else {
                    var exists = -1;
                    for (var b = 0; b < lessons.length; b++) {
                        if (lessons[b].start == data.days[i].lessons[a].startmin && lessons[b].end == data.days[i].lessons[a].endmin) {
                            exists = b;
                        }
                    }

                    if (exists == -1) {
                        lessons.push({
                            info: data.days[i].lessons[a].info,
                            start: data.days[i].lessons[a].startmin,
                            end: data.days[i].lessons[a].endmin,
                            startt: data.days[i].lessons[a].start,
                            endt: data.days[i].lessons[a].end,
                            subject: data.days[i].lessons[a].subject
                        });
                    } else {
                        lessons[exists].info = lessons[exists].info + "<br />" + data.days[i].lessons[a].info;
                    }
                }
            }
            generateDivForDay(lessons, i);
            currentLessons.push(lessons);
        }
    });
}

generateDivForDay = function(day, id) {

    for (var i = 0; i < day.length; i++) {
        let spacer = $("<div></div>")
        spacer.attr("class", "schema-spacer");

        if (i == 0) {
            spacer.attr("style", "height: " + (day[i].start - 480) * minuteHeight + "px;");
        } else {
            spacer.attr("style", "height: " + (day[i].start - day[i - 1].end) * minuteHeight + "px;");
        }

        let container = $("<div></div>");
        container.attr("class", "schema-item");
        container.attr("style", "height: " + (day[i].end - day[i].start) * minuteHeight + "px;");

        if (typeof day[i].subject != "undefined") {
            var color = generateColorForLesson(day[i].subject);
            container.attr("style", "height: " + (day[i].end - day[i].start) * minuteHeight + "px; background-color: " + color + ";");
        }

        let infoContainer = $("<div></div>");
        infoContainer.attr("class", "schema-item-text-wrapper");
        infoContainer.html(day[i].info);

        let timeContainer = $("<div></div>");

        if ((day[i].end - day[i].start) > 40) {
            timeContainer.attr("class", "schema-item-time-wrapper");
            timeContainer.html("<div>" + day[i].startt + "</div><div>" + day[i].endt + "</div>");
        } else {
            /*timeContainer.attr("class", "schema-item-time-wrapper__small");
            timeContainer.html(day[i].startt + " - " + day[i].endt);*/

            timeContainer.attr("class", "schema-item-time-wrapper");
            timeContainer.html("<div>" + day[i].startt + "</div><div>" + day[i].endt + "</div>");
        }

        if ($(window).width() > 1300 && parseInt(scheduleWidth * 0.06) < 17) {
            timeContainer.attr("style", "font-size:" + parseInt(scheduleWidth * 0.06) + "px;");
            infoContainer.attr("style", "font-size:" + parseInt(scheduleWidth * 0.06) + "px;");
        }

        container.append(infoContainer);
        container.append(timeContainer);

        $(".day-" + id).append(spacer);
        $(".day-" + id).append(container);
    }
}
