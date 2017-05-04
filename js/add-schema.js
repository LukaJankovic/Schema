$(function() {
    $("#add").click(function() {

        $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {

            let schoolID = "";
            let name = "";

            for (var i = 0; i < data.length; i++) {
                if ($("#add-skola").val() == (data[i].namn + " (" + data[i].stad + ")")) {
                    schoolID = data[i].id;
                    name = data[i].namn;
                }
            }

            addClass(schoolID, name, $("#add-klass").val());
            window.location.href = "https://lserver.alite.am/apps/schema";
        });
    });

    $("#cancel").click(function() {
        window.location.href = "https://lserver.alite.am/apps/schema";
    });
})
