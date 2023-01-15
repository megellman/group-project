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
// var spirit does not have input, change checkbox? Maybe dropdown menu w/ spirit type 


var wine = "";
localStorage.setItem('wine', wine)
var pairingUrl;
// NO input for wine as of rn
var random = false
localStorage.setItem('random', random)
// if the user is looking for a pairing of a wine for a particular food then they will have to give us the food and check the box for pairing 
var wineP = false
localStorage.setItem('wineP', wineP)
//API URL's


//this wine pairing is give it a wine and get a food
    // this wine pairing is give it a food and get a wine
var foodPairingUrl;
var edrecipeUrl;
var cocktailURLDrinkName;

var userParameters= [];





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
  food = foodInput.val()
  localStorage.setItem('food', food)
  newFunction()
  return food;// might be dead
})



// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js
cocktailSubmit.on('submit', function(e){ 
  e.preventDefault()
  drinkName = cocktailInput.val()
  localStorage.setItem('drinkName', drinkName)
  
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

  

  function newFunction() {
    location.assign('./results.html')
  }