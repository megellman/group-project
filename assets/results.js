// HTML point to variables
var resultsContainer = $('#results')
var backBtn = $('#backBtn')


// Home page  user input search parameters 

// Give it a wine and get a food
function getWinePairing() {
  fetch(pairingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
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
      
        var dh = dataPF.hits[0]
        var resultCardContainer = $('<div>')
        var saveBtn = $('<button>');
        var recipeImg = $('<img>');
        var nameOfRecipe = $('<h2>');
        var linkToRecipe = $('<a>')

        recipeImg.attr('src', dataPF.hits[0].recipe.image);
        saveBtn.text('save');
        saveBtn.attr('class', 'saveBtn');
        recipeImg.attr('class', 'object-scale-down h-48 w-96')
        //   resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
        linkToRecipe.attr('href', dh.recipe.url)
        resultCardContainer.attr('class', 'recipe px-6 py-4 border-4 border-green-800 border-double my-5')
        nameOfRecipe.attr('class', 'font-bold text-xl mb-2')

        nameOfRecipe.text(dh.recipe.label)
        linkToRecipe.text('Go to Recipe')

        resultsContainer.append(resultCardContainer)
        resultCardContainer.append(recipeImg)
        resultCardContainer.append(nameOfRecipe)
        resultCardContainer.append(linkToRecipe)
        resultCardContainer.append(saveBtn)
      }

    )
}

// Give it a food and get a wine
function getFoodPairing() {
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
      resultEntry.attr('class', 'recipe px-6 py-4 border-4 border-green-800 border-double my-5')

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

      for (var i = 0; i < 5; i++) {
        var dh = data.hits[i]
        var resultEntry = $('<div>');
        var resultCardContainer = $('<div>')
        var saveBtn = $('<button>');
        var recipeImg = $('<img>');
        var nameOfRecipe = $('<h2>');
        var linkToRecipe = $('<a>')

        recipeImg.attr('src', data.hits[i].recipe.image);
        recipeImg.attr('class', 'object-scale-down h-48 w-96')
        saveBtn.text('save');
        saveBtn.attr('class', 'saveBtn');
        //   resultEntry.attr('class', 'border-4 border-green-800 border-double my-5')
        linkToRecipe.attr('href', dh.recipe.url)
        resultCardContainer.attr('class', 'recipe px-6 py-4 border-4 border-green-800 border-double my-5')
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


function getDrinkByName() {
  fetch(cocktailURLDrinkName)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataDrinkName) {
      console.log(dataDrinkName);
      var entryContainer = $('<div>').appendTo(resultsContainer);
      var drinkName = $('<h2>').appendTo(entryContainer);
      var ingredients = $('<p>').appendTo(entryContainer)
      var instructions = $('<p>').appendTo(entryContainer);
      var measurements = $('<p>').appendTo(entryContainer);
      var thumbNail = $('<img>').appendTo(entryContainer);
      var saveBtn = $('<button>');
      // URL issue, if time, revisit this
      // var video = $('<iframe>').appendTo(entryContainer);

      saveBtn.text('save');
      saveBtn.attr('class', 'saveBtn');
      thumbNail.attr('src', dataDrinkName.drinks[0].strDrinkThumb);
      entryContainer.attr('class', 'recipe');
      // video.attr({
      //   src: dataDrinkName.drinks[0].strVideo,
      //   class: 'aspect-video'
      // });

      var arr = [dataDrinkName.drinks[0].strIngredient1, dataDrinkName.drinks[0].strIngredient2, dataDrinkName.drinks[0].strIngredient3, dataDrinkName.drinks[0].strIngredient4, dataDrinkName.drinks[0].strIngredient5, dataDrinkName.drinks[0].strIngredient6, dataDrinkName.drinks[0].strIngredient7, dataDrinkName.drinks[0].strIngredient8, dataDrinkName.drinks[0].strIngredient9, dataDrinkName.drinks[0].strIngredient10, dataDrinkName.drinks[0].strIngredient11, dataDrinkName.drinks[0].strIngredient12, dataDrinkName.drinks[0].strIngredient13, dataDrinkName.drinks[0].strIngredient14, dataDrinkName.drinks[0].strIngredient15];
      var measArr = [dataDrinkName.drinks[0].strMeasure1, dataDrinkName.drinks[0].strMeasure2, dataDrinkName.drinks[0].strMeasure3, dataDrinkName.drinks[0].strMeasure, dataDrinkName.drinks[0].strMeasure4, dataDrinkName.drinks[0].strMeasure5, dataDrinkName.drinks[0].strMeasure6, dataDrinkName.drinks[0].strMeasure7, dataDrinkName.drinks[0].strMeasure8, dataDrinkName.drinks[0].strMeasure9, dataDrinkName.drinks[0].strMeasure10, dataDrinkName.drinks[0].strMeasure11, dataDrinkName.drinks[0].strMeasure12, dataDrinkName.drinks[0].strMeasure13, dataDrinkName.drinks[0].strMeasure14, dataDrinkName.drinks[0].strMeasure15]

      var ingredientItems = arr.filter(function(el){
        return el != null;
      });
      var measurementItems = measArr.filter(function(el){
        return el != null;
      });
      
      instructions.text(dataDrinkName.drinks[0].strInstructions);
      drinkName.text(dataDrinkName.drinks[0].strDrink);
      measurements.text(measurementItems);
      ingredients.text(ingredientItems);
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
      var ingredientArray = [dataR.strIngredient1, dataR.strIngredient2, dataR.strIngredient3, dataR.strIngredient4, dataR.strIngredient5, dataR.strIngredient6, dataR.strIngredient7, dataR.strIngredient8, dataR.strIngredient9, dataR.strIngredient10, dataR.strIngredient11, dataR.strIngredient12, dataR.strIngredient13, dataR.strIngredient14, dataR.strIngredient15]
      var amountArray = [dataR.strMeasure1, dataR.strMeasure2, dataR.strMeasure3, dataR.strMeasure4, dataR.strMeasure5, dataR.strMeasure6, dataR.strMeasure7, dataR.strMeasure8, dataR.strMeasure9, dataR.strMeasure10, dataR.strMeasure11, dataR.strMeasure12, dataR.strMeasure13, dataR.strMeasure14, dataR.strMeasure15]
      var resultEntry = $('<div>');
      var saveBtn = $('<button>');
      var cocktailImg = $('<img>');
      var nameOfDrink = $('<h2>');
      var drinkRecipe = $('<a>');
      var instructions = $('<p>');

      resultEntry.attr('class', 'recipe border-4 border-green-800 border-double my-5')
      cocktailImg.attr('src', dataR.strDrinkThumb);
      cocktailImg.attr('class', 'object-scale-down h-48 w-96');
      nameOfDrink.attr('class', 'font-bold text-xl mb-2')

      drinkRecipe.text("Go to Recipe");
      nameOfDrink.text(dataR.strDrink);
      saveBtn.text('save');
      saveBtn.attr('class', 'saveBtn');

      var ingredientList = [];
      for (var i = 0; i < ingredientArray.length; i++) {
        console.log(ingredientArray[i])
        console.log(ingredientArray[i] === null)
        if (ingredientArray[i] !== null) {
          ingredientList.push(ingredientArray[i]);
        }
      }
      var amountList = [];
      for (var i = 0; i < amountArray.length; i++) {
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

// this says depending on what parameters the user choose run the corresponding function 
function apiCalls() {
  if (wine !== "") {
    getWinePairing()
    wine = "";
  } else if (wineP === true && food !== "") {
    getFoodPairing()
    food = "";
    wineP = false
  } else if (food !== "") {
    console.log('made it to here going to getRecipes')
    getRecipes()
    food = ""
  } else if (drinkName !== "") {
    getDrinkByName()
    drinkName = ""
  } else if(random == true){
    randomDrink()
    // Homepage - the initial value is going to be false and then there is going to be an event listener that sets this to true
    random = false
  }
}

apiCalls();

// Click save button to get form to select what party (key) to save recipe to
resultsContainer.on('click', '.saveBtn', function () {
  console.log('hello');
  var currentContainer = $(this).parent();
  var form = $('<form>');
  var input = $('<input>');
  var datalist = $('<datalist>');
  var submit = $('<input>');

  input.attr({
    type: 'text',
    list: 'options',
    class: 'input'
  });
  datalist.attr('id', 'options');
  form.attr('id', 'form');
  submit.attr({
    type: 'submit',
    value: 'Submit',
    id: 'submit'
  })

  form.append(input);
  form.append(submit);
  form.append(datalist);
  currentContainer.append(form);

  // If there are already form options saved in local storage, pull them down and make them options
  // If this exists,
  if (localStorage.getItem('formObj.hasOwnProperty(input.val())')) {
    console.log('load form options');
    var formOptions = JSON.stringify(localStorage.getItem('formObj'));
    for (var i = 0; i < formObj.length; i++) {
      var formEntry = $('<option>');
      formEntry.text(formOptions[i])
      datalist.append(formEntry);
      return
    }
  } else if (localStorage.getItem('formObj')=== 0) {
    console.log('local storage empty, waiting');
    return
  } else {
    console.log('save to formObj');
    localStorage.setItem('formObj', input.val());
  }
})

// When party (key) is selected, see if key already exists and if it does, get key data, add new objarr (recipe) to obj save to local storage. If it doesn't already exist, create a new key and save it to local storage
$(document).on('click', '#submit', function (e) {
  console.log('form submitted!');
  e.preventDefault();
  var existingOption = {};
  var optionSelected = $('.input').val();
  console.log(`option selected is ${optionSelected}`);
  var recipeText = $(this).closest('.recipe').text();
  if (localStorage.getItem(optionSelected) === null) {
    localStorage.setItem(optionSelected, recipeText);
    console.log('Saved!');
  } else {
    existingOption = JSON.parse(localStorage.getItem(optionSelected));
    console.log(existingOption);
    console.log(optionSelected);
    existingOption.push(recipeText);
  }
})


