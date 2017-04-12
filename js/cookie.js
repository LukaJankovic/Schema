addClass = function(school, name, id) {
    console.log("school " + school);
    console.log("id " + id);

    schema = Cookies.get('schema');

    console.log(schema);

    if (typeof(schema) == 'undefined') {
        schema = [];
    } else {
        schema = JSON.parse(schema);
    }

    var err = 0;
    for (var i = 0; i < schema.length; i++) {
        if (schema[i]["id"] == id && schema[i]["school"] == school && schema[i]["name"] == name) {
            err = 1;
        }
    }

    if (err == 0) {
        schema.push({
            "school": school,
            "id": id,
            "name": name
        });
    }

    Cookies.set('schema', schema);
}

getSchemaFavourites = function() {
    return JSON.parse(Cookies.get('schema'));
}
