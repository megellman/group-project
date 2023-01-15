// Id Variables
var foodForm = $('#food-form')
var form1 = $('#form-1')
var foodButton = $('#food-bttn')
var foodInput = $('#food-input')
var checkBox = $('#mycheckbox')
var foodSubmit = $('#food-submit')
var cocktailForm = $('#cocktails-form')
var cocktailButton = $('#cocktail-bttn')
var form2 = $('#form-2')
var cocktailInput =$('#cocktail-input')
var cocktailSubmit = $('#cocktails-submit')
var feelingAdvent = $('#feeling-advent')
var hungryForm = $('#hungryForm')

//Parameter Variables 
var food = "";
var drinkName = ""
var spirit = "";
// var spirit does not have input, change checkbox? Maybe dropdown menu w/ spirit type
var wine = "";
// NO input for wine as of rn
var random = false
// if the user is looking for a pairing of a wine for a particular food then they will have to give us the food and check the box for pairing 
var wineP = false

//API URL's
var recipeApiKey =  "0ed1c23457ba46ddaffacdeb0b81d967"; //"20f9574ee747498490dd1bd80b379967"; 
//this wine pairing is give it a wine and get a food
var pairingUrl = `https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${recipeApiKey}`;
// this wine pairing is give it a food and get a wine
var foodPairingUrl = `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${recipeApiKey}`;
// if we split our recipe searches and wine pairing searches between different api's we won't max out so easily
var edrecipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_key=d0e7ce8996da109b870161b5504f5e87&app_id=b7a56f5e`;
var cocktailURLSpirit = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`;
var cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`;

// event listener for homepage foodBtn - hides both buttons and unhides food form
foodButton.on("click", function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form1.removeClass('hidden')
})

// event listener for homepage cocktailBtn - hides both buttons and unhides cocktail form
cocktailButton.on('click', function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form2.removeClass('hidden')
})

// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js

foodSubmit.on('click', function(e){ 
  // hungryForm.on('click', '#foodSubmit', function(e){ 
  e.preventDefault()
  e.isPre
  food = foodInput.val()
  console.log(food)
  // location.assign('results.html')

})



// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js
cocktailSubmit.on('submit', function(e){ 
  e.preventDefault()
  drinkName = cocktailInput.val()
  location.assign('results.html')
})

 // toggles wine p value true/false to if button is checked
  checkBox.on('click', function(e){    
    if (wineP === false) {
      wineP = true
      console.log(wineP) 
    } else {
      wineP = false
      console.log(wineP) 
    } 
  })

  // toggles wine p value true/false to if button is checked
  feelingAdvent.on('click', function(e){    
    if (random === false) {
      random = true
    } else {
      random = false
    } 
  })