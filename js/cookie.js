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

deleteClass = function(id) {
    var nSchema = getSchemaFavourites();
    nSchema.splice(id, 1)
    Cookies.set('schema', nSchema);

    if (nSchema.length < getSchemaFavourite()) {
        setSchemaFavourite(0);
    }
}

getSchemaFavourites = function() {
    return JSON.parse(Cookies.get('schema'));
}

setSchemaFavourite = function(id) {
    console.log(id);
    Cookies.set('schema-favourite', id);
}

getSchemaFavourite = function() {
    return Cookies.get('schema-favourite');
}
