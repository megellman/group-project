// HTML point to variables
var resultsContainer = $('#resultsContainer')
var backBtn = $('#backBtn')



// Home page  user input search parameters 
// were need parameters from homepage 


// this says depending on what parameters the user choose run the corresponding function 
if (wine != "") {
  console.log(wine !== "")
  getWineParing()
  wine = "";
} else if (spirit !== "") {
  getDrinkBySpirit()
  spirit = ""
// } else if (food !== "") {
//   getRecipes()
//   food = ""
// } 
} else if (drinkName !== "") {
  getDrinkByName()
  drinkName = ""
} else {
  (random)
  randomDrink()
  // Homepage - the initial value is going to be false and then there is going to be an event listener that sets this to true
  random = false
}


// Get Wine Pairings
function getWineParing() {
  fetch(pairingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      saveBtn.text('X');
      resultEntry.text(data.text);
      resultEntry.append(saveBtn);
      resultsContainer.append(resultEntry);
    })
}

// Get Recipes
// function getRecipes() {
//   fetch(recipeUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
// }

// fetching a recipe by drink name 
function getDrinkByName() {
  fetch(cocktailURLDrinkName)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataDrinkName) {
      console.log(dataDrinkName);
      for (var i = 0; i < 5; i++) {
        var resultEntry = $('<div>');
        var saveBtn = $('<button>');
        var cocktailImg = $('<img>');
        cocktailImg.attr('src', dataDrinkName.drinks.strDrinkThumb);
        saveBtn.text('X');
        resultEntry.text(dataDrinkName.drinks[i].strInstructions);
        resultEntry.append(cocktailImg);
        resultEntry.append(saveBtn);
        resultsContainer.append(resultEntry);
      }
    })
}

// fetching a list by spirit 
function getDrinkBySpirit() {
  fetch(cocktailURLSpirit)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataSpirit) {
      console.log(dataSpirit);
      for (var i = 0; i < 5; i++) {
        drinkName = dataSpirit.drinks[i].strDrink;
        getRecipeFromSpirit()
      }
    })
}

// fetching a recipe by drink name 
function getRecipeFromSpirit() {
  fetch(drinkNameUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataDrinkName) {
      console.log(dataDrinkName);
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      var cocktailImg = $('<img>');
      cocktailImg.attr('src', dataDrinkName.drinks[0].strDrinkThumb);
      saveBtn.text('X');
      resultEntry.text(dataDrinkName.drinks.strInstructions);
      resultEntry.append(cocktailImg);
      resultEntry.append(saveBtn);
      resultsContainer.append(resultEntry);
    })
}

// fetching a Random drink
function randomDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(function (response) {
      return response.json();
    })
    .then(function (dataRandom) {
      console.log(dataRandom)
    })
}


