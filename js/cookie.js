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

  Cookies.set('schema', schema, {
    expires: 365
  });
}

deleteClass = function(id) {
  var nSchema = getSchemaFavourites();
  nSchema.splice(id, 1);
  Cookies.set('schema', nSchema, {
    expires: 365
  });
}

getSchemaFavourites = function() {
  return JSON.parse(Cookies.get('schema'));
}

addSchool = function(school, id) {
  food = Cookies.get('food');

  if (typeof(food) == 'undefined') {
    food = [];
  } else {
    food = JSON.parse(food);
  }

  var err = 0;
  for (var i = 0; i < food.length; i++) {
    if (food[i]["school"] == school && schema[i]["id"] == id) {
      err = 1;
    }
  }

  if (err == 0) {
    food.push({
      "school": school,
      "id": id
    });
  }

  Cookies.set('food', food, {
    expires: 365
  });
}

deleteSchool = function(id) {
  var nSchema = getFoodFavourites();
  nSchema.splice(id, 1);
  Cookies.set('food', nSchema, {
    expires: 365
  });
}

getFoodFavourites = function() {
  return JSON.parse(Cookies.get('food'));
}

setLanguage = function(lan) {
  Cookies.set('lan', lan, {
    expires: 365
  });
}

getLanguage = function() {
  if (Cookies.get('lan')) {
    return Cookies.get('lan');
  } else {
    return "se";
  }
}

clear = function() {
    Cookies.remove("lan");
    Cookies.remove("food");
    Cookies.remove("schema");
}
