addClass = function(school, name, id) {
    console.log("school " + school);
    console.log("id " + id);

    schema = Cookies.get('schema');

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

    Cookies.set('schema', schema, { expires: 365 });
}

deleteClass = function(id) {
    var nSchema = getSchemaFavourites();
    nSchema.splice(id, 1)
    Cookies.set('schema', nSchema, { expires: 365 });

    if (nSchema.length < getSchemaFavourite()) {
        setSchemaFavourite(0);
    }
}

getSchemaFavourites = function() {
    return JSON.parse(Cookies.get('schema'));
}

setSchemaFavourite = function(id) {
    Cookies.set('schema-favourite', id, { expires: 365 });
}

getSchemaFavourite = function() {
    return Cookies.get('schema-favourite');
}

generateColorForLesson = function(lesson) {

    var id = md5(lesson);
    var color = "";

    $.ajax({
        url: 'https://lserver.alite.am/apps/schema/res/color-palette.json',
        async: false,
        dataType: 'json',
        success: function(data) {
            color = data[pickRandomProperty(data, lesson)].shade_A700;
        }
    });

    return color;
}

function pickRandomProperty(obj, lesson) {
    var result;
    var count = 0;
    Math.seedrandom(lesson);
    for (var prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}
