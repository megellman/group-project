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
        var resultEntry = $('<div>');
        var saveBtn = $('<button');
        saveBtn.text =
        resultEntry.text(data.text);
        resultsContainer.append(resultEntry);

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
})
