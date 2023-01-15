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
  foodPairingUrl
} else if (wineP === true && food !== "") {
    getFoodParing()
    food = "";
    wineP = false
} else if (spirit !== "") {
  getDrinkBySpirit()
  spirit = ""
} else if (food !== "") {
} else if (wineP === false && food !== "") {
    console.log('made it to here going to getRecipes')
  getRecipes()
  food = "" 
} else if (drinkName !== "") {
  getDrinkByName()
  drinkName = ""
} else {
  (random)
  randomDrink()
  // Homepage - the initial value is going to be false and then there is going to be an event listener that sets this to true
  random = false
}
}

// Give it a wine and get a food
function getWineParing() {
  fetch(pairingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.pairings.length; i++) {
            pairFood = data.pairings[i]
            pairedWineRecipes(pairFood)
        }
    })
}

function pairedWineRecipes() {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${pairFood}&app_key=d0e7ce8996da109b870161b5504f5e87&app_id=b7a56f5e`)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataPF) {
        console.log(dataPF)
        for (var i = 0; i < 5; i++) {
            var dh = dataPF.hits[i]
            var resultEntry = $('<div>');
            var resultCardContainer = $('<div>')
            var saveBtn = $('<button>');
            var recipeImg = $('<img>');
            var nameOfRecipe = $('<h2>');
            var linkToRecipe = $('<a>')
      
            recipeImg.attr('src', dataPF.hits[i].recipe.image);
            recipeImg.attr('class', 'object-scale-down h-48 w-96')
          //   resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
            linkToRecipe.attr('href', dh.recipe.url)
            resultCardContainer.attr('class', 'px-6 py-4 border-4 border-green-800 border-double my-5' )
            nameOfRecipe.attr('class', 'font-bold text-xl mb-2')
                  
            nameOfRecipe.text(dh.recipe.label)
            linkToRecipe.text('Go to Recipe')
      
            resultsContainer.append(resultEntry)
            resultEntry.append(resultCardContainer)
            resultCardContainer.append(recipeImg)
            resultCardContainer.append(nameOfRecipe)
            resultCardContainer.append(linkToRecipe)
            resultCardContainer.append(saveBtn)
        }      
        
    })
}

// Give it a food and get a wine
function getFoodParing() {
    fetch(foodPairingUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        var resultEntry = $('<div>');
        var pairMatch = $('<p>');
        var pairingText = $('<p>');
        var wineImg = $('<img>');
        var wineLink = $('<a>');
        var saveBtn = $('<button>');

        wineImg.attr('src', data.productMatches[0].imageUrl)
        wineLink.attr('href', data.productMatches[0].link)
        resultEntry.attr('class', 'px-6 py-4 border-4 border-green-800 border-double my-5' )

        pairMatch.text('Top Choice: ' + data.productMatches[0].title)
        saveBtn.text('Save');
        pairingText.text(data.pairingText)
        wineLink.text('Grab One Here')

        resultsContainer.append(resultEntry);
        resultEntry.append(wineImg);
        resultEntry.append(pairingText);
        resultEntry.append(pairMatch);
        resultEntry.append(wineLink);
        resultEntry.append(saveBtn);
        
      })
  }

// Get Recipes
function getRecipes() {
  fetch(edrecipeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < 5; i++){
      var dh = data.hits[i]
      var resultEntry = $('<div>');
      var resultCardContainer = $('<div>')
      var saveBtn = $('<button>');
      var recipeImg = $('<img>');
      var nameOfRecipe = $('<h2>');
      var linkToRecipe = $('<a>')

      recipeImg.attr('src', data.hits[i].recipe.image);
      recipeImg.attr('class', 'object-scale-down h-48 w-96')
    //   resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
      linkToRecipe.attr('href', dh.recipe.url)
      resultCardContainer.attr('class', 'px-6 py-4 border-4 border-green-800 border-double my-5' )
      nameOfRecipe.attr('class', 'font-bold text-xl mb-2')
            
      nameOfRecipe.text(dh.recipe.label)
      linkToRecipe.text('Go to Recipe')

      resultsContainer.append(resultEntry)
      resultEntry.append(resultCardContainer)
      resultCardContainer.append(recipeImg)
      resultCardContainer.append(nameOfRecipe)
      resultCardContainer.append(linkToRecipe)
      resultCardContainer.append(saveBtn)

      }
      
    })

// fetching a recipe by drink name 
function getDrinkByName() {
fetch(cocktailURLDrinkName) 
  .then(function (response) {
    return response.json();
  })
  .then(function(dataDrinkName){
    console.log(dataDrinkName)
  })

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
        var saveBtn = $('<button>');
        var cocktailImg = $('<img>');
        var nameOfDrink = $('<h2>');
        var instructions = $('<p>');
        var dataDN = dataDrinkName.drinks[i]
        var ingredientDNArray = [dataDN.strIngredient1, dataDN.strIngredient2, dataDN.strIngredient3 , dataDN.strIngredient4, dataDN.strIngredient5, dataDN.strIngredient6, dataDN.strIngredient7, dataDN.strIngredient8, dataDN.strIngredient9, dataDN.strIngredient10, dataDN.strIngredient11, dataDN.strIngredient12, dataDN.strIngredient13, dataDN.strIngredient14, dataDN.strIngredient15];
        var amountDNArray = [dataDN.strMeasure1, dataDN.strMeasure2, dataDN.strMeasure3 , dataDN.strMeasure4, dataDN.strMeasure5, dataDN.strMeasure6, dataDN.strMeasure7, dataDN.strMeasure8, dataDN.strMeasure9, dataDN.strMeasure10, dataDN.strMeasure11, dataDN.strMeasure12, dataDN.strMeasure13, dataDN.strMeasure14, dataDN.strMeasure15];

         // displaying the image but console says that it is not reading strDrinkThumb
        cocktailImg.attr('src', dataDN.strDrinkThumb);
        cocktailImg.attr('class', 'object-scale-down h-48 w-96')
        resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
        nameOfDrink.attr('class', 'font-bold text-xl mb-2')

        saveBtn.text('save');
        nameOfDrink.text(dataDN.strDrink)

        var ingredientDNList = [];
      for (var i = 0; i < ingredientDNArray.length; i++){
        if (ingredientDNArray[i] !== null) {
            ingredientDNList.push(ingredientDNArray[i]);
        }
      }
      var amountDNList = [];
      for (var i = 0; i < amountDNArray.length; i++){
        if (amountDNArray[i] !== null) {
            amountDNList.push(amountDNArray[i]);
        }
      }
      instructions.text(dataDN.strInstructions + '' + 'Ingredients: ' + ingredientDNList + '.' + ' Amounts: ' + amountDNList);

        
        resultsContainer.append(resultEntry);
        resultEntry.append(cocktailImg);
        resultEntry.append(nameOfDrink);
        resultEntry.append(instructions);
        resultEntry.append(saveBtn);
       
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
      var dataD = dataDrinkName.drinks[0]
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      var cocktailImg = $('<img>');
      var nameOfDrink = $('<h2>');
      var instructions = $('<p>');
      var ingredientDArray = [dataD.strIngredient1, dataD.strIngredient2, dataD.strIngredient3 , dataD.strIngredient4, dataD.strIngredient5, dataD.strIngredient6, dataD.strIngredient7, dataD.strIngredient8, dataD.strIngredient9, dataD.strIngredient10, dataD.strIngredient11, dataD.strIngredient12, dataD.strIngredient13, dataD.strIngredient14, dataD.strIngredient15];
      var amountDArray = [dataD.strMeasure1, dataD.strMeasure2, dataD.strMeasure3 , dataD.strMeasure4, dataD.strMeasure5, dataD.strMeasure6, dataD.strMeasure7, dataD.strMeasure8, dataD.strMeasure9, dataD.strMeasure10, dataD.strMeasure11, dataD.strMeasure12, dataD.strMeasure13, dataD.strMeasure14, dataD.strMeasure15];

      cocktailImg.attr('src', dataD.strDrinkThumb);
      cocktailImg.attr('class', 'object-scale-down h-48 w-96')
      resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
      nameOfDrink.attr('class', 'font-bold text-xl mb-2')
      
      
      nameOfDrink.text(dataD.strDrink)
      saveBtn.text('save');
      

      var ingredientDList = [];
      for (var i = 0; i < ingredientDArray.length; i++){
        if (ingredientDArray[i] !== null) {
            ingredientDList.push(ingredientDArray[i]);
        }
      }
      var amountDList = [];
      for (var i = 0; i < amountDArray.length; i++){
        if (amountDArray[i] !== null) {
            amountDList.push(amountDArray[i]);
        }
      }
      instructions.text(dataD.strInstructions + '' + 'Ingredients: ' + ingredientDList + '.' + ' Amounts: ' + amountDList);

      resultsContainer.append(resultEntry);
      resultEntry.append(cocktailImg);    
      resultEntry.append(nameOfDrink);
      resultEntry.append(instructions);
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

      resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
      cocktailImg.attr('src', dataR.strDrinkThumb);
      cocktailImg.attr('class', 'object-scale-down h-48 w-96');
      nameOfDrink.attr('class', 'font-bold text-xl mb-2')

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

// Click save button to get form to select what party (key) to save recipe to
resultsContainer.on('click', '.saveBtn', function(){
  var currentContainer = this.parent();
  var form = $('<form>');
  var input = $('<input>');
  var datalist = $('<datalist>');

  input.attr({
    type: 'text',
    list: 'options'
  });
  datalist.attr('id', 'formOps');
  form.attr('id', 'form');

  form.append(input);
  form.append(input);
  currentContainer.append(form);

  // If there are already form options saved in local storage, pull them down and make them options
  if(localStorage.getItem('formObj') !== null){
    var formOptions = JSON.parse(localStorage.getItem('formObj'));
    for(var i = 0; i < formObj.length; i++){
      var formEntry = $('<option>');
      formEntry.text(formOptions[i])
      form.append(formEntry);
    } 
  }
})

// When party (key) is selected, see if key already exists and if it does, get key data, add new objarr (recipe) to obj save to local storage. If it doesn't already exist, create a new key and save it to local storage
$('form').on('submit', function(){
  var optionSelected = option.value;
  $('#form').remove();
  var recipeText = this.parent().text();
  if(localStorage.getItem(optionSelected) === null){
    localStorage.setItem(optionSelected, recipeText);
  } else {
    var existingOption = JSON.parse(localStorage.getItem(optionSelected));
    existingOption.push(recipeText);
  }
}
)}
