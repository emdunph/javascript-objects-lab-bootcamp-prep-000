var recipes = {recipes: "recipes"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipies, {[key]: value});
}