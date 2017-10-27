var recipes = {recipes: "recipes"}

fucntion updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipies, {[key]: value});
}