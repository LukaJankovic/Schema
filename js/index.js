$(function() {
    $.getJSON('https://lserver.alite.am/apps/schema/res/schools.json', function(data) {
      
        $("#skolor").append("<!--[if lte IE 9]><select data-datalist='skolor'><![endif]-->")
        for (let i = 0; i < data.length; i++) {
            $("#skolor").append($("<option></option>").attr("value", data[i].namn+" ("+data[i].stad+")"));
        }
        $("#skolor").append("<!--[if lte IE 9]></select><![endif]-->");

        loadPolyfill();
    });
})
