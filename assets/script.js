// Id Variables
var foodForm = $('#food-form');
var form1 = $('#form-1');
var foodButton = $('#food-bttn');
var foodInput = $('#food-input');
var checkBox = $('#mycheckbox');
var foodSubmit = $('#food-submit');
var cocktailForm = $('#cocktails-form');
var cocktailButton = $('#cocktail-bttn');
var form2 = $('#form-2');
var cocktailInput =$('#cocktail-input')
var cocktailSubmit = $('#cocktails-submit');
var feelingAdvent = $('#feeling-advent');
var hungryForm = $('#hungryForm');
var wineInput = $('#wine-input');
var foodWine = $("#food-wine");
var cocktails =$("#cocktails");
var logoHome =$("#logo-home");

//Parameter Variables 

var food = "";
var drinkName = ""
localStorage.setItem('drinkName', drinkName);
// var spirit does not have input, change checkbox? Maybe dropdown menu w/ spirit type 


var wine = "";
var random = "false";
var wineP = "false";

//API URL's
var pairingUrl;
var foodPairingUrl;
var edrecipeUrl;
var cocktailURLDrinkName;
var userParameters= [];


logoHome.on("click", function(){
  console.log("did i click")
location.assign("./index.html")


})


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
foodWine.on("click", function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form1.removeClass('hidden')
  form2.attr('class','hidden')
})
cocktails.on('click', function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form2.removeClass('hidden')
  form1.attr('class','hidden')
})


// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js

foodSubmit.on('click', function(e){ 
  // hungryForm.on('click', '#foodSubmit', function(e){ 
  e.preventDefault()
  food = foodInput.val()
  localStorage.setItem('food', food)
  foodInput.val("")
  if(wineInput.val() !== ''){
  wine = wineInput.val()
  localStorage.setItem('wine', wine)
  wineInput.val("")
  }

 
  newFunction()
  return food, wine;// might be dead
})
 checkBox.on('click', function(){
   
  if( checkBox.is(':checked') ){
    wineP ="true"
    localStorage.setItem("wineP", wineP)
  }else{
    
    localStorage.removeItem("wineP")
  }
  })


// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js
cocktailSubmit.on('click', function(e){ 
  e.preventDefault()
  e.stopPropagation()
  drinkName = cocktailInput.val()
  localStorage.setItem('drinkName', drinkName)
  newFunction()
  return drinkName;
})
 
 // toggles wine p value true/false to if button is checked
 
  
 
  feelingAdvent.on('click', function(e){  
    e.preventDefault() 
    var random = "false"  
    if (random === "false") {
      random = "true"
      localStorage.setItem('random', random)
      newFunction()
    }
  })

  

  function newFunction() {
    location.assign('./results.html')
  }