var dialogOpen = false;

$(function() {

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
        showDialog();
    });

    $("#add-dialog").click(function() {
        hideDialog();
    })

    $("#shade-full").click(function() {
        hideDialog();
    })
})
