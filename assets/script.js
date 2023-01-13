// Variables
var wine = "malbec";
var pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${recipeApiKey}`;
var recipeApiKey =  "20f9574ee747498490dd1bd80b379967";
var food = "pasta";
var recipeUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=2&apiKey=20f9574ee747498490dd1bd80b379967`;

// Get Wine Pairings
fetch(pairingUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })

// Get Recipes
fetch(recipeUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })