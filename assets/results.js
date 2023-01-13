// HTML point to variables
var resultsContainer = $('#resultsContainer')
var backBtn = $('#backBtn')



// Home page  user input search parameters 
// were need parameters from homepage 


// this says depending on what parameters the user choose run the corresponding function 
if (wine != ""){
    console.log(wine !== "")
    getWineParing()
    wine = ""
} else if (spirit !== "") {
    getDrinkBySpirit()
    spirit = ""
} else if (food !== "") {
    getRecipes()
    food = ""
} else if (drinkName !== "") {
    getDrinkByName()
    drinkName = ""
} else { (random) 
    randomDrink()
    // Homepage - the initial value is going to be false and then there is going to be an event listener that sets this to true
    random = false
} 


// Get Wine Pairings
function getWineParing(){
fetch(pairingUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
}

// Get Recipes
function getRecipes(){
fetch(recipeUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
}

// fetching a recipe by drink name 
function getDrinkByName() {
fetch(cocktailURLDrinkName) 
  .then(function (response) {
    return response.json();
  })
  .then(function(dataDrinkName){
    console.log(dataDrinkName)
  })
}

// fetching a list by spirit 
function getDrinkBySpirit() {
  fetch(cocktailURLSpirit) 
  .then(function (response) {
    return response.json();
  })
  .then(function(dataSpirit){
  console.log(dataSpirit)
  })
}

  // fetching a Random drink
  function randomDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php') 
  .then(function (response) {
    return response.json();
  })
  .then(function(dataRandom){
    console.log(dataRandom)
  })
}


