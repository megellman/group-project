// HTML point to variables
var resultsContainer = $('#resultsContainer')
var backBtn = $('#backBtn')



// Home page  user input search parameters 

whatchaLookin4()

// this says depending on what parameters the user choose run the corresponding function 
function whatchaLookin4(){
if (wine != "") {
  getWineParing()
  wine = "";
} else if (spirit !== "") {
  getDrinkBySpirit()
  spirit = ""
} else if (food !== "") {
  getRecipes()
  food = "" 
} else if (drinkName !== "") {
    console.log("made it sending to getDrinkByName")
  getDrinkByName()
  drinkName = ""
} else {
  (random)
  randomDrink()
  // Homepage - the initial value is going to be false and then there is going to be an event listener that sets this to true
  random = false
}
}

// Get Wine Pairings
function getWineParing() {
  fetch(pairingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      saveBtn.text('X');
      resultEntry.text(data.text);
      resultEntry.append(saveBtn);
      resultsContainer.append(resultEntry);
    })
}

// Get Recipes
function getRecipes() {
  fetch(recipeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
}

// fetching a list by spirit 
function getDrinkBySpirit() {
  fetch(cocktailURLSpirit)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataSpirit) {
        console.log('made it to getDrinkBySpirit')
      console.log(dataSpirit);
      for (var i = 0; i < 5; i++) {
        drinkFromSpirit = dataSpirit.drinks[i].strDrink;
        getRecipeFromSpirit(drinkFromSpirit)
      }
    })
}

// fetching a recipe by drink name  *** trying to get this to run when given a spirit
function getRecipeFromSpirit() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkFromSpirit}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataDrinkName) {
      console.log(dataDrinkName);
      for (var i = 0; i < 5; i++) {
        var resultEntry = $('<div>');
        var nameOfDrink = $('<h2>');
        var saveBtn = $('<button>');
        var cocktailImg = $('<img>');
        var nameOfDrink = $('<h2>');
        var drinkRecipe = $('<a>');

         // displaying the image but console says that it is not reading strDrinkThumb
        cocktailImg.attr('src', dataDrinkName.drinks[i].strDrinkThumb);
        cocktailImg.attr('class', 'object-scale-down h-48 w-96')
        resultEntry.attr('class', 'border-4 border-green-800 border-double')

        saveBtn.text('save');
        nameOfDrink.text(dataDrinkName.drinks[i].strDrink)
        resultEntry.text(dataDrinkName.drinks[i].strInstructions);
        
        resultEntry.append(nameOfDrink)
        resultEntry.append(cocktailImg);
        resultEntry.append(saveBtn);
        resultsContainer.append(resultEntry);
      }
    })
}
// fetching a recipe by drink name 
function getDrinkByName() {
  fetch(cocktailURLDrinkName)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataDrinkName) {
      console.log(dataDrinkName);
      var dataD = dataDrinkName.drink[0]
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      var cocktailImg = $('<img>');
      var nameOfDrink = $('<h2>');
      var instructions = $('<p>')
      var ingredientDArray = [dataD.strIngredient1, dataD.strIngredient2, dataD.strIngredient3 , dataD.strIngredient4, dataD.strIngredient5, dataD.strIngredient6, dataD.strIngredient7, dataD.strIngredient8, dataD.strIngredient9, dataD.strIngredient10, dataD.strIngredient11, dataD.strIngredient12, dataD.strIngredient13, dataD.strIngredient14, dataD.strIngredient15]
      var amountDArray = [dataD.strMeasure1, dataD.strMeasure2, dataD.strMeasure3 , dataD.strMeasure4, dataD.strMeasure5, dataD.strMeasure6, dataD.strMeasure7, dataD.strMeasure8, dataD.strMeasure9, dataD.strMeasure10, dataD.strMeasure11, dataD.strMeasure12, dataD.strMeasure13, dataD.strMeasure14, dataD.strMeasure15]

      cocktailImg.attr('src', dataDrinkName.drinks[0].strDrinkThumb);
      cocktailImg.attr('class', 'object-scale-down h-48 w-96')
      resultEntry.attr('class', 'border-4 border-green-800 border-double')
      
      saveBtn.text('save');
      resultEntry.text(dataDrinkName.drinks[i].strInstructions);
      resultEntry.text(dataDrinkName.drinks.strInstructions);

      var ingredientDList = [];
      for (var i = 0; i < ingredientDArray.length; i++){
        if (ingredientDArray[i] !== null) {
            ingredientDList.push(ingredientDArray[i]);
        }
      }
      var amountDList = [];
      for (var i = 0; i < amountDArray.length; i++){
        console.log(amountDArray[i])
        console.log(amountDArray[i] === null)
        if (amountDList[i] !== null) {
            amountDList.push(amountDArray[i]);
        }
      }
      instructions.text(dataD.strInstructions + '' + 'Ingredients: ' + ingredientDList + '.' + ' Amounts: ' + amountDList);

      resultsContainer.append(resultEntry);
      resultEntry.append(nameOfDrink)
      resultEntry.append(cocktailImg);
      resultEntry.append(saveBtn);
      
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
      var dataR = dataRandom.drinks[0]
      var ingredientArray = [dataR.strIngredient1, dataR.strIngredient2, dataR.strIngredient3 , dataR.strIngredient4, dataR.strIngredient5, dataR.strIngredient6, dataR.strIngredient7, dataR.strIngredient8, dataR.strIngredient9, dataR.strIngredient10, dataR.strIngredient11, dataR.strIngredient12, dataR.strIngredient13, dataR.strIngredient14, dataR.strIngredient15]
      var amountArray = [dataR.strMeasure1, dataR.strMeasure2, dataR.strMeasure3 , dataR.strMeasure4, dataR.strMeasure5, dataR.strMeasure6, dataR.strMeasure7, dataR.strMeasure8, dataR.strMeasure9, dataR.strMeasure10, dataR.strMeasure11, dataR.strMeasure12, dataR.strMeasure13, dataR.strMeasure14, dataR.strMeasure15]
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      var cocktailImg = $('<img>');
      var nameOfDrink = $('<h2>');
      var drinkRecipe = $('<a>');
      var instructions = $('<p>');

      resultEntry.attr('class', 'border-4 border-green-800 border-double')
      cocktailImg.attr('src', dataR.strDrinkThumb);
      cocktailImg.attr('class', 'object-scale-down h-48 w-96');

      drinkRecipe.text("Go to Recipe");
      nameOfDrink.text(dataR.strDrink);
      saveBtn.text('save');
      
      var ingredientList = [];
      for (var i = 0; i < ingredientArray.length; i++){
        console.log(ingredientArray[i])
        console.log(ingredientArray[i] === null)
        if (ingredientArray[i] !== null) {
            ingredientList.push(ingredientArray[i]);
        }
      }
      var amountList = [];
      for (var i = 0; i < amountArray.length; i++){
        console.log(amountArray[i])
        console.log(amountArray[i] === null)
        if (amountArray[i] !== null) {
            amountList.push(amountArray[i]);
        }
      }
      instructions.text(dataR.strInstructions + '' + 'Ingredients: ' + ingredientList + '.' + ' Amounts: ' + amountList);
      
      resultsContainer.append(resultEntry);
      resultEntry.append(cocktailImg);
      resultEntry.append(nameOfDrink);
      resultEntry.append(instructions);
      resultEntry.append(saveBtn);
    })
}


