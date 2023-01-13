//Parameter Variables
var food = "";
var drinkName = "";
var spirit = "gin";
var wine = "";
var drinkFromSpirit = "";

//API URL's
var recipeApiKey =  "20f9574ee747498490dd1bd80b379967";
var pairingApiKey = "";
//this wine pairing is give it a wine and get a food
var pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${pairingApiKey}`;

var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=2&apiKey=${recipeApiKey}`;

var cocktailURLSpirit = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`;

var cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`;

var drinkNameUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkFromSpirit}`;

// Get Wine Pairings
// fetch(pairingUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data);
//     })

// // Get Recipes
// fetch(recipeUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data);
//     })


// // fetching a recipe by drink name 
// fetch(cocktailURLDrinkName) 
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function(dataDrinkName){
//     console.log(dataDrinkName)
//   })

//   // fetching a list by spirit 
// fetch(cocktailURLDrinkName) 
// .then(function (response) {
//   return response.json();
// })
// .then(function(dataSpirit){
//   console.log(dataSpirit)
// })

//   // fetching a Random drink
//   fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php") 
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function(dataRandom){
//     console.log(dataRandom)
//   })

  // //
  // fetch(cocktailURLDrinkName) 
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function(dataDrinkName){
  //   console.log(dataDrinkName)
  // })
  
