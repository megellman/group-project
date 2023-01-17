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
var rfContainer = $('#search-form-container')
var rContainer = $(' r-container')
var btnClicked = true

//Parameter Variables 

var food = "";
var drinkName = ""
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
location.assign("./index.html")
})

// storing weather the form is on the screen or not is true 
// click food button on first view of home page
foodButton.on("click", function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form2.attr('class', 'hidden')
  foodFormGen()
})

//click cocktail btn on first view of home page
cocktailButton.on('click', function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden') 
  form1.attr('class', 'hidden')
  cocktailFormGen()
})

// click food wine tab at top
foodWine.on("click", function(e){
  e.stopPropagation()
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  var form2 = $('#form-2')
  form2.attr('class', 'hidden')
  var rc = $('#r-container')
  rc.attr("class", "hidden")

  if (document.getElementById('form-1')){
    return;
  }
 foodFormGen()
})


cocktails.on('click', function(e){
  e.stopPropagation()
  console.log('i was clicked')
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  var form1 = $('#form-1')
  form1.attr('class', 'hidden')
  var rc = $('#r-container')
  rc.attr("class", "hidden")
  if (document.getElementById('form-2')){
    return;
  } 
  cocktailFormGen()
})

// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js

$(document).on('click','#foodSubmit',function(e){ 
  e.preventDefault()
  food = foodInput.val()
  localStorage.setItem('food', food)
  foodInput.val("")
  if(wineInput.val() !== ''){
  wine = wineInput.val()
  localStorage.setItem('wine', wine)
  wineInput.val("")
  }

 
  location.assign('./results.html')
  return food, wine;// might be dead
})
 $(document).on('click','#mycheckbox', function(){
   
  if( checkBox.is(':checked') ){
    wineP ="true"
    localStorage.setItem("wineP", wineP)
  }else{
    localStorage.removeItem("wineP")
  }
  })


// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js
$(document).on('click', '#cocktails-submit', function(e){ 
  e.preventDefault()
  e.stopPropagation()
  drinkName = cocktailInput.val()
  localStorage.setItem('drinkName', drinkName)
  location.assign('./results.html')
  return drinkName;
})
 
 // toggles wine p value true/false to if button is checked
 
  
 
  $(document).on('click','#feeling-advent', function(e){  
    e.preventDefault() 
    var random = "false"  
    if (random === "false") {
      random = "true"
      localStorage.setItem('random', random)
      location.assign('./results.html')
    }
  })


  function foodFormGen() {
  var divEl = $('<div>')
  var formEl = $('<form>')
  var h3El = $('<h3>')
  var labelEl = $('<label>')
  var inputEL = $('<input>')
  var label2El = $('<label>')
  var input2EL = $('<input>')
  var input3El = $('<input>')
  var buttonEL = $('<button>')

 divEl.attr( 'id', "form-1")
 formEl.attr('id', "hungryForm")
 h3El.text('Hungry')
 labelEl.attr('for', "food-name")
 labelEl.text('Food')
 inputEL.attr({'type':"text", 'id':"food-input"})
 label2El.attr('for', "wine-name")
 input2EL.attr({'type':"text", 'id':"wine-input"})
 input3El.attr({'type':"checkbox",  'id':"mycheckbox"})
 buttonEL.attr('id',"food-submit")
 buttonEL.text('Search')

 rfContainer.append(divEl)
  divEl.append(formEl)
  formEl.append(h3El)
  formEl.append(labelEl)
  labelEl.append(inputEL)
  formEl.append(label2El)
  label2El.append(input2EL)
  formEl.append(input3El)
  formEl.append(buttonEL)
  }

  function cocktailFormGen() {
    var divEl = $('<div>')
    var formEl = $('<form>')
    var h3El = $('<h3>')
    var labelEl = $('<label>')
    var inputEL = $('<input>')
    var buttonEL = $('<button>')
    var button2EL = $('<button>')
  
   divEl.attr( 'id',"form-2")
   formEl.attr('id', "hungryForm")
   h3El.text('Thirsty')
   labelEl.attr('for', "drink-name")
   labelEl.text('Enter Drink ')
   inputEL.attr({'type':"text", 'id':"cocktail-input"})
   
   buttonEL.attr('id',"cocktails-submit")
   buttonEL.text('Search')        
   button2EL.attr({'id':"feeling-advent", 'class':'value=false'})
   button2EL.text('Feeling Adventurous?')       
  
   rfContainer.append(divEl)
    divEl.append(formEl)
    formEl.append(h3El)
    formEl.append(labelEl)
    labelEl.append(inputEL)
    formEl.append(buttonEL)
    formEl.append(button2EL)
  }