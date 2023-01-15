// Id Variables
var foodForm = $('#food-form')
var form1 = $('#form-1')
var foodButton = $('#food-bttn')
var foodInput = $('#foor-input')
var checkBox = $('#checkbox')
var foodSubmit = $('#food-submit')
var cocktailForm = $('#cocktails-form')
var cocktailButton = $('#cocktail-bttn')
var form2 = $('#form-2')
var cocktailInput =$('#cocktail-input')
var cocktailSubmit = $('#cocktails-submit')
var feelingAdvent = $('#feeling-advent')
//Parameter Variables 
var food = "taco";
var drinkName = ""
// var spirit does not have input, change checkbox? Maybe dropdown menu w/ spirit type
var wine = "";
// NO input for wine as of rn
var random = false
// if the user is looking for a pairing of a wine for a particular food then they will have to give us the food and check the box for pairing 
var wineP = false

//API URL's

var recipeApiKey =  "0ed1c23457ba46ddaffacdeb0b81d967"; //"20f9574ee747498490dd1bd80b379967"; 

//this wine pairing is give it a wine and get a food
var pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${recipeApiKey}`;
// this wine pairing is give it a food and get a wine
var foodPairingUrl = `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${recipeApiKey}`;
// if we split our recipe searches and wine pairing searches between different api's we won't max out so easily
var edrecipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_key=d0e7ce8996da109b870161b5504f5e87&app_id=b7a56f5e`;

// var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=2&apiKey=20f9574ee747498490dd1bd80b379967&addRecipeInformation=true`;

var cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`;

foodButton.on("click", function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form1.removeClass('hidden')
})

cocktailButton.on('click', function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form2.removeClass('hidden')
})