//Parameter Variables
var food = "pasta";
var drinkName = "margarita"
var spirit = "vodka"
var wine = "malbec";

//API URL's
var recipeApiKey =  "20f9574ee747498490dd1bd80b379967";
//this wine pairing is give it a wine and get a food
var pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${recipeApiKey}`;
var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=2&apiKey=20f9574ee747498490dd1bd80b379967`;
var cocktailURLSpirit = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&i=${spirit}`
var cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`

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
  
