var dialogOpen = false;

let showDialog;
let hideDialog;

$(function() {

    clearAndShow = function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (window.location.href == "https://lserver.alite.am/apps/schema/skolmat.html") {
              window.location.href = "https://lserver.alite.am/apps/schema/add-food.html"
            } else {
              window.location.href = "https://lserver.alite.am/apps/schema/add-school.html"
            }
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
})
