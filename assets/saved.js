// create elements
var savedContainer = $('#saved-container');





// grabb items from localStorage


setURL()
function setURL() {
  food = localStorage.getItem("food")
  drinkName = localStorage.getItem("drinkName")
  wine = localStorage.getItem("wine")
  random = localStorage.getItem("random")
  wineP = localStorage.getItem("wineP")

  var recipeApiKey = "0ed1c23457ba46ddaffacdeb0b81d967"; //"20f9574ee747498490dd1bd80b379967"; 
  pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${recipeApiKey}`;
  // this wine pairing is give it a food and get a wine
  foodPairingUrl = `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${recipeApiKey}`;
  edrecipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_key=d0e7ce8996da109b870161b5504f5e87&app_id=b7a56f5e`;

  cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`;

};

// create and display items from localStorage
 