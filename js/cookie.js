addClass = function(school, id) {
    console.log("school " + school);
    console.log("id " + id);

    schema = JSON.parse(Cookies.get('schema'));

    if (schema == null) {
        schema = [];
    }

    var err = 0;
    for (var i = 0; i < schema.length; i++) {
        if (schema[i]["id"] == id && schema[i]["school"] == school) {
            err = 1;
        }
    }

    if (err == 0) {
        schema.push({
            "school": school,
            "id": id
        });
    }

    Cookies.set('schema', schema);
}

getSchemaFavourites = function() {
    return JSON.parse(Cookies.get('schema'));
}
