$(function() {
    $("#add").click(function() {
        $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {

            let schoolID = "";

            for (var i = 0; i < data.length; i++) {
                if ($("#add-skola").val() == (data[i].namn + " (" + data[i].stad + ")")) {
                    schoolID = data[i].id;
                }
            }

            addClass(schoolID, $("#add-klass").val());
            window.location.href = "https://lserver.alite.am/apps/schema"
        });
    });
})
