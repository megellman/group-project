var enterMsg = false;
// HTML point to variables
var resultsContainer = $('.container')
var backBtn = $('#backBtn')

// Give it a wine and get a food
function getWinePairing() {
  fetch(pairingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var resultCardContainer = $('<div>')
      var description = $('<p>')

      description.text(data.text)

      resultsContainer.append(resultCardContainer)
      resultCardContainer.append(description)

      for (var i = 0; i < data.pairings.length; i++) {
        pairFood = data.pairings[i]
        pairedWineRecipes(pairFood)
      }
    })
}

function pairedWineRecipes() {
  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${pairFood}&app_key=d0e7ce8996da109b870161b5504f5e87&app_id=b7a56f5e`)
    .then(function (response) {
      console.log(response)
      return response.json();
    })
    .then(function (dataPF) {
      console.log(dataPF)

      var dh = dataPF.hits[0]
      var resultEntry = $('<div>')
      var recipeImg = $('<img>');
      var cardContent = $('<div>');
      var nameOfRecipe = $('<h2>');
      var linkHolder = $('<div>');
      var linkToRecipe = $('<a>');
      var saveBtn = $('<button>');

      resultEntry.attr('class', 'leading-relaxed lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8')
      recipeImg.attr({ 'src': dataPF.hits[0].recipe.image, 'class': 'overflow-hidden' });
      cardContent.attr('class', 'p-4');
      saveBtn.attr('class', 'saveBtn');
      recipeImg.attr('class', 'object-scale-down h-48 w-96');
      linkHolder.attr('class', 'content-container mt-5');
      // linkToRecipe.attr([{
      //   'href': dh.recipe.url,
      //   'class': 'recipe-content'
      // }]) // don't know why but these were not working had to separate them 
      linkToRecipe.attr({ 'href': dh.recipe.url, 'class': 'hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100', })
      nameOfRecipe.attr('class', 'content-container font-bold text-xl mb-2 text-gray-200')
      resultEntry.attr('class', 'px-6 py-4 border-4 border-green-800 border-double my-5');

      saveBtn.text('save');
      nameOfRecipe.text(dh.recipe.label)
      linkToRecipe.text('Go to Recipe')

      linkHolder.append(linkToRecipe);
      resultsContainer.append(resultEntry);
      resultEntry.append(nameOfRecipe, imgPContainer, saveBtn);
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
      var pairMatch = $('<h2>');
      var pairingText = $('<p>');
      var linkHolder = $('<div>');
      var wineLink = $('<a>');
      var saveBtn = $('<button>');

      if (data.productMatches.length > 0) {
        var wineImg = $('<img>');
        wineImg.attr({ 'src': data.productMatches[0].imageUrl, 'class': 'object-scale-down h-48 w-96' });
        resultEntry.append(wineImg)
        wineLink.attr({
          'href': data.productMatches[0].link,
          'class': 'hover:bg-zinc-500 py-2 px-3 font-semibold hover:text-white bg-zinc-100 text-gray-500'
        });
        wineLink.text('Click for more info');
        pairMatch.text('Top Choice: ' + data.productMatches[0].title)
        resultEntry.append(pairMatch)
      }
      resultEntry.attr('class', 'leading-relaxed recipe px-6 py-4 border-4 border-green-800 border-double my-5')
      pairMatch.attr('class', 'content-container font-medium text-gray-200 text-lg my-2 uppercase');
      pairingText.attr('class', 'content-container text-justify');
      linkHolder.attr('class', 'bg-zinc-100 mt-5');
      saveBtn.attr('class', 'saveBtn');

      saveBtn.text('Save');
      pairingText.text(data.pairingText)

      resultsContainer.append(resultEntry);
      resultEntry.append(pairingText, linkHolder, saveBtn,);
      linkHolder.append(wineLink);

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
        var recipeImg = $('<img>');
        var nameOfRecipe = $('<h2>');
        var linkHolder = $('<div>');
        var linkToRecipe = $('<a>');
        var saveBtn = $('<button>');

        linkHolder.attr('class', 'content-container bg-zinc-100 mt-5');
        recipeImg.attr({
          'src': data.hits[i].recipe.image,
          'class': 'object-scale-down h-48 w-96'
        });
        saveBtn.text('save');
        saveBtn.attr('class', 'saveBtn');
        resultEntry.attr('class', 'leading-relaxed recipe px-6 py-4 border-4 border-green-800 border-double my-5')
        linkToRecipe.attr({
          'href': dh.recipe.url,
          'class': 'hover:bg-zinc-500 py-2 px-3 font-semibold hover:text-white bg-zinc-100 text-gray-500'
        });
        nameOfRecipe.attr('class', 'content-container font-medium text-gray-200 text-lg my-2 uppercase')

        nameOfRecipe.text(dh.recipe.label)
        linkToRecipe.text('Go to Recipe')

        linkHolder.append(linkToRecipe);
        resultEntry.append(recipeImg, nameOfRecipe, linkHolder, saveBtn)
        resultsContainer.append(resultEntry)
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
      console.log(dataDrinkName)
      for (var i = 0; i < 5; i++) {
        var resultEntry = $('<div>');
        var thumbNail = $('<img>');
        var cardContent = $('<div>');
        var drinkName = $('<h2>');
        var ingredients = $('<p>');
        var instructions = $('<p>');
        var measurements = $('<p>');
        var saveBtn = $('<button>');
        resultEntry.attr('class', 'recipe px-6 py-4 border-4 border-green-800 border-double my-5');
        thumbNail.attr({
          'src': dataDrinkName.drinks[i].strDrinkThumb,
          'class': 'object-scale-down h-48 w-96'
        });
        cardContent.attr('class', 'p-4 line-8 leading-relaxed');
        drinkName.attr('class', 'font-medium text-gray-200 text-lg my-2 uppercase')
        instructions.attr('class', 'content-container text-justify k mt-5 line-10 leading-6 mt-5');
        measurements.attr('class', 'content-container text-justify  mt-5 line-10 leading-6 mt-5');
        ingredients.attr('class', 'content-container text-justify mt-5 line-10 leading-6 mt-5');
        saveBtn.text('save');
        saveBtn.attr('class', 'saveBtn');

        var arr = [dataDrinkName.drinks[i].strIngredient1, dataDrinkName.drinks[i].strIngredient2, dataDrinkName.drinks[i].strIngredient3, dataDrinkName.drinks[i].strIngredient4, dataDrinkName.drinks[i].strIngredient5, dataDrinkName.drinks[i].strIngredient6, dataDrinkName.drinks[i].strIngredient7, dataDrinkName.drinks[i].strIngredient8, dataDrinkName.drinks[i].strIngredient9, dataDrinkName.drinks[i].strIngredient10, dataDrinkName.drinks[i].strIngredient11, dataDrinkName.drinks[i].strIngredient12, dataDrinkName.drinks[i].strIngredient13, dataDrinkName.drinks[i].strIngredient14, dataDrinkName.drinks[i].strIngredient15];
        var measArr = [dataDrinkName.drinks[i].strMeasure1, dataDrinkName.drinks[i].strMeasure2, dataDrinkName.drinks[i].strMeasure3, dataDrinkName.drinks[i].strMeasure, dataDrinkName.drinks[i].strMeasure4, dataDrinkName.drinks[i].strMeasure5, dataDrinkName.drinks[i].strMeasure6, dataDrinkName.drinks[i].strMeasure7, dataDrinkName.drinks[i].strMeasure8, dataDrinkName.drinks[i].strMeasure9, dataDrinkName.drinks[i].strMeasure10, dataDrinkName.drinks[i].strMeasure11, dataDrinkName.drinks[i].strMeasure12, dataDrinkName.drinks[i].strMeasure13, dataDrinkName.drinks[i].strMeasure14, dataDrinkName.drinks[i].strMeasure15]
        var ingredientItems = arr.filter(function (el) {
          return el != null;
        });
        var measurementItems = measArr.filter(function (el) {
          return el != null;
        });
        instructions.text(dataDrinkName.drinks[i].strInstructions);
        drinkName.text(dataDrinkName.drinks[i].strDrink);
        measurements.text(`Measurements: ${measurementItems}`);
        ingredients.text(`Ingredients: ${ingredientItems}`);

        resultsContainer.append(resultEntry);
        resultEntry.append(thumbNail, cardContent);
        cardContent.append(drinkName, ingredients, instructions, measurements, saveBtn)
      }
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
      var cocktailImg = $('<img>');
      var cardContent = $('<div>');
      var nameOfDrink = $('<h2>');
      var drinkRecipe = $('<a>');
      var instructions = $('<p>');
      var saveBtn = $('<button>');

      // drinkRecipe.attr('class', 'recipe-content');
      instructions.attr('class', 'content-container');
      resultEntry.attr('class', ' px-6 py-4 border-4 border-green-800 border-double my-5');
      cocktailImg.attr({
        'src': dataR.strDrinkThumb,
        'class': 'object-scale-down h-48 w-96'
      });
      nameOfDrink.attr('class', 'font-medium text-gray-200 text-lg my-2 uppercase')
      cardContent.attr('class', 'content-container p-4 leading-relaxed');
      saveBtn.attr('class', 'saveBtn');
      drinkRecipe.attr('class', 'content-container');

      drinkRecipe.text("Go to Recipe");
      nameOfDrink.text(dataR.strDrink);
      saveBtn.text('save');

      var ingredientList = [];
      for (var i = 0; i < ingredientArray.length; i++) {
        if (ingredientArray[i] !== null) {
          ingredientList.push(ingredientArray[i]);
        }
      }
      var amountList = [];
      for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] !== null) {
          amountList.push(amountArray[i]);
        }
      }
      instructions.text(dataR.strInstructions + '' + 'Ingredients: ' + ingredientList + '.' + ' Amounts: ' + amountList);

      resultsContainer.append(resultEntry);
      resultEntry.append(cocktailImg, cardContent);
      cardContent.append(nameOfDrink, drinkRecipe, instructions, saveBtn);
    })
}

// this says depending on what parameters the user choose run the corresponding function 
function apiCalls() {
  if (wine !== null) {
    getWinePairing()
    wine = "";
    localStorage.removeItem('wine')
  } else if (wineP === 'true' && food !== null) {
    getFoodPairing()
    food = "";

    localStorage.removeItem('food')
    wineP = 'false'
    localStorage.removeItem('wineP')

  } else if (food !== null) {
    getRecipes()
    food = "";
    localStorage.removeItem('food')
  } else if (drinkName !== null) {

    getDrinkByName()
    drinkName = ""
    localStorage.removeItem('drinkName')
  } else if (random === 'true') {
    randomDrink()
    // Homepage - the initial value is going to be false and then there is going to be an event listener that removes this to true
    random = 'false'
    localStorage.removeItem('random')
  }
}
setURL()

function setURL() {
  food = localStorage.getItem("food")
  drinkName = localStorage.getItem("drinkName")
  wine = localStorage.getItem("wine")
  random = localStorage.getItem("random")
  wineP = localStorage.getItem("wineP")

  var recipeApiKey = "0ed1c23457ba46ddaffacdeb0b81d967"; //"20f9574ee747498490dd1bd80b379967"; 
  pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${recipeApiKey}`;
  foodPairingUrl = `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${recipeApiKey}`;
  edrecipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_key=d0e7ce8996da109b870161b5504f5e87&app_id=b7a56f5e`;

  cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`;

  apiCalls()
};
var visBtn = false

// Click save button to get form to select what category, i.e. "Dinner Party A" to save recipe to
resultsContainer.on('click', '.saveBtn', function () {
  if (visBtn == true) {
    return;
  } else {
    visBtn = true;
    var currentContainer = $(this).parent();
    console.log($(this).parent())
    var backButton = $('<button>');
    var form = $('<form>');
    var input = $('<input>');
    var select = $('<datalist>');
    var submit = $('<input>');
    backButton.text('X')
    backButton.attr({
      class: 'grid justify-items-start flex item-start box-border p-3',
    });
    input.attr({
      type: 'text',
      list: 'options',
      class: 'input'
    });
    select.attr('id', 'options');
    form.attr('id', 'form');
    submit.attr({
      type: 'submit',
      value: 'Submit',
      id: 'submit'
    })


    form.append(backButton, input, submit, select);
    currentContainer.append(form);
    backButton.on('click', function () {
      $('#form').remove()
      visBtn = false
    });
    // Get formObj from local storage, OR if that key doesn't exist, console waiting message
    var formObj = JSON.parse(localStorage.getItem("formObj")) || console.log('formObj doesn\'t exist yet, waiting');
    // If formObj exists, create datalist options for each item
    if (formObj) {
      for (var i = 0; i < formObj.length; i++) {
        var formEntry = $('<option>');
        formEntry.text(formObj[i]);
        select.append(formEntry);
      }
    }
  }
})

$(document).ready(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13 && '#form' && document.URL.includes("results.html")) {
        if (enterMsg === true) {
          return
        } else {
          enterMsg = true;
        event.preventDefault();
        var container = $('<div>');
        var div = $('<div>');
        var message = $('<h3>');
        var closeMsg = $('<button>');

        message.text('Please click the save button to save your entry.');
        closeMsg.text('Ok');

        container.attr({ 'class': 'neutral-300 flex justify-center items-center', 'id': 'enter-msg' });
        div.attr('class', 'bg-neutral-300 px-6 py-4 rounded-md text-center');
        message.attr('class', 'text-s mb-4 font-bold text-white leading-relaxed');
        closeMsg.attr({ 'class': 'bg-zinc-300 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold border border-white p-4', 'id': 'enter-message' })

        container.appendTo(form);
        div.appendTo(container);
        div.append(message, closeMsg);

        $(document).on('click', '#enter-message', function () {
          container.remove();
        });

        return;
      }
    }
  });

}
);

var saveMsgVis = false;

$('document').on('click', '#submit', function (e) {
  e.preventDefault();
  if (enterMsg === true) {
    $('#enter-msg').remove()
    enterMsg = false;
  }

  visBtn = false;
  // Get formObj from local storage, OR if that key doesn't exist, create an array
  var formObj = JSON.parse(localStorage.getItem("formObj")) || [];
  // Whatever the user types/selects will be newItem
  var newItem = ($('.input').val());
  // If the user types in a category that already exists, don't add it to local storage
  if (formObj.includes(newItem)) {
  } else {
    // If this category doesn't exist, push it into the array
    formObj.push(newItem);
  }
  // Replace the old value of this array in local storage with this updated version 
  localStorage.setItem("formObj", JSON.stringify(formObj));
  // Get the entire the object of the category selected, i.e. "Dinner Party A" from local storage OR if it doesn't exist, create a new object
  var recipeObj = JSON.parse(localStorage.getItem(newItem)) || {};
  // title is name of recipe and content is everything listed in entry
  var title = $('#form').siblings('h2').text();
  var content = $('#form').siblings('.content-container').text();
  // If the entry exists in object, log all done! -- probably switch to updating the page with a message that says that

  if (title in recipeObj) {
    if (saveMsgVis === true) {
      return
    }
    saveMsgVis = true;
    console.log('already saved, done!');
    var container = $('<div>');
    var div = $('<div>');
    var message = $('<h3>');
    var closeMsg = $('<button>');

    message.text('You already saved this recipe to this category!');
    closeMsg.text('Ok');

    container.attr('class', 'neutral-300 flex justify-center items-center');
    div.attr('class', 'bg-neutral-300 px-6 py-4 rounded-md text-center');
    message.attr('class', 'text-s mb-4 font-bold text-white leading-relaxed');
    closeMsg.attr({ 'class': 'bg-zinc-300 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold border border-white p-4', 'id': 'close-message' })

    container.appendTo(form);
    div.appendTo(container);
    div.append(message, closeMsg);

    $(document).on('click', '#close-message', function () {
      container.remove();
    });

    return;
  } else {
    // If the entry doesn't exist in object, add new nested object with title as key and content as value
    recipeObj[title] = content;
    // add to local storage
    localStorage.setItem(newItem, JSON.stringify(recipeObj));
  }
  // Removes the save form from page
  form.remove();
})


