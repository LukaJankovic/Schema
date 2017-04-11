var dialogOpen = false;

$(function() {

    clearAndShow = function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = "https://lserver.alite.am/apps/schema/add-school.html"
        } else {
            $("#add-skola").val("");
            $("#add-klass").val("");

            showDialog();
        }
    }

    showDialog = function() {

        $("#add-dialog").attr("class", "md-dialog md-dialog__shown");
        $("#shade-full").attr("class", "shade-shown");
        dialogOpen = true;
    }

    hideDialog = function() {
        $("#add-dialog").attr("class", "md-dialog md-dialog__hidden");
        $("#shade-full").attr("class", "shade-hidden");
        dialogOpen = false;
    }

    $("#add-button").click(function() {
        clearAndShow();
    });

    $("#shade-full").click(function() {
        hideDialog();
    });

    $("#cancel").click(function() {
        hideDialog();
    });

    $("#add").click(function() {

        $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {

            let schoolID = "";

            for (var i = 0; i < data.length; i++) {
                if ($("#add-skola").val() == (data[i].namn + " (" + data[i].stad + ")")) {
                    schoolID = data[i].id;
                }
            }

            addClass(schoolID, $("#add-klass").val());
        });
    });
})
