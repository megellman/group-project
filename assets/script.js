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
var cocktailInput = $('#cocktail-input')
var cocktailSubmit = $('#cocktails-submit');
var feelingAdvent = $('#feeling-advent');
var hungryForm = $('#hungryForm');
var wineInput = $('#wine-input');
var foodWine = $("#food-wine");
var cocktails = $("#cocktails");
var logoHome = $("#logo-home");
var rfContainer = $('#search-form-container')
var rContainer = $(' r-container')
var btnClicked = true;
foodVis = false;
cocktailVis = false;


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
var userParameters = [];

var welcomeMsg = $('<h2>');
var message = JSON.parse(localStorage.getItem('firstname'));
welcomeMsg.text(message);
// welcomeMsg.attr()

// storing weather the form is on the screen or not is true 
// click food button on first view of home page
foodButton.on("click", function () {
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form2.attr('class', 'hidden')
  foodFormGen()
})

//click cocktail btn on first view of home page
cocktailButton.on('click', function () {
  foodForm.attr('class', 'hidden')
  cocktailForm.attr('class', 'hidden')
  form1.attr('class', 'hidden')
  cocktailFormGen()
})

// Navbar button - depending on which file you're on, it hides the elements on the page and it always run the foodFormGen()
foodWine.on("click", function (e) {
  e.stopPropagation()
  if (document.URL.includes("searchform.html")) {
    foodForm.attr('class', 'hidden')
    cocktailForm.attr('class', 'hidden')
  } else if (document.URL.includes("results.html")) {
    $('.results-container').attr('class', 'hidden');
    $('.results-nested-container').attr('class', 'hidden');
  } else if (document.URL.includes("saved.html")) {
    $('.saved-container').attr('class', 'hidden');
    $('.search-form-container').attr('class', 'hidden');
  }
  foodFormGen()
})

// Navbar button - depending on which file you're on, it hides the elements on the page and it always run the cocktailFormGen()
cocktails.on('click', function (e) {
  e.stopPropagation()
  if (document.URL.includes("searchform.html")) {
    foodForm.attr('class', 'hidden')
    cocktailForm.attr('class', 'hidden')
  } else if (document.URL.includes("results.html")) {
    $('.results-container').attr('class', 'hidden');
    $('.results-nested-container').attr('class', 'hidden');
  } else if (document.URL.includes("saved.html")) {
    $('.saved-container').attr('class', 'hidden');
    $('.search-form-container').attr('class', 'hidden');
  }
  cocktailFormGen()
})

// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js
$(document).on('click', '#food-submit', function (e) {
  e.preventDefault()
  console.log("see me")
  console.log($('#wine-input').val() !== '')
  console.log($('#food-input').val() !== '')
  if ( $('#wine-input').val() !== '' && $('#food-input').val() !== '') {
    
    var message = $('<p>');
    message.attr('class', 'text-s mb-4 font-bold text-white leading-relaxed')
    message.text('Please only choose one. A recipe or a wine that you would like to know what foods go best with.')
    $('#hungryForm').append(message) 
    return;
  }
  food = $('#food-input').val()
  localStorage.setItem('food', food)
  if ($('#wine-input').val() !== '') {
    wine = $('#wine-input').val()
    localStorage.setItem('wine', wine)
  }

  location.assign('./results.html')
  return food, wine;// might be dead
})

$(document).on('click', '#mycheckbox', function () {
  if ($('#mycheckbox').is(':checked')) {
    wineP = true;
    localStorage.setItem("wineP", wineP)
  } else {
    localStorage.removeItem("wineP")
  }
})

// event listener submit button on food form will add it form as onSubmit after get the variable to work on results.js
$(document).on('click', '#cocktails-submit', function (e) {
  e.preventDefault()
  e.stopPropagation()
  console.log('submit works')
  drinkName = $('#cocktail-input').val()
  localStorage.setItem('drinkName', drinkName)
  location.assign('./results.html')
  return drinkName;
})

$(document).on('click', '#feeling-advent', function (e) {
  e.preventDefault()
  var random = "false"
  if (random === "false") {
    random = "true"
    localStorage.setItem('random', random)
    location.assign('./results.html')
  }
})

function foodFormGen() {
  if(foodVis === true){
    return
  }
  // Hides cocktail form and foodVis toggled to true and cocktailVis to false
  $('#form-2').remove()
  foodVis = true;
  cocktailVis = false;

  var divEl = $('<div>')
  var formEl = $('<form>')
  var h3El = $('<h3>')
  var labelEl = $('<label>')
  var inputEL = $('<input>')
  var label2El = $('<label>')
  var input2EL = $('<input>')
  var input3El = $('<input>')
  var buttonEL = $('<button>')
  var foodContainer = $('<div>');
  winePairLabel = $('<label>');
  var pairContainer = $('<div>');
  lineBreak = $('<hr>')

  divEl.attr({ 'id': "form-1", 'class': 'w-2/3 h-max gap-x-8 mx-auto mt-20' })
  formEl.attr({ 'id': "hungryForm", 'class': 'border border-white flex flex-col p-32 justify-center align-center gap-y-8 text-center' })
  h3El.text('Hungry')
  labelEl.attr({ 'for': "food-name", 'class': 'inline' })
  labelEl.text(`Food: `)
  inputEL.attr({ 'type': "text", 'id': "food-input", 'class': 'text-black' })
  label2El.attr('for', "wine-name");
  label2El.text(`Wine: `)
  input2EL.attr({ 'type': "text", 'id': "wine-input", 'class': 'text-black' })
  buttonEL.text('Search')
  h3El.attr('class', 'text-5xl');
  input3El.attr({ 'type': "checkbox", 'id': 'mycheckbox', 'class': 'inline ml-5 text-black' })
  buttonEL.attr({ 'id': 'food-submit' })
  winePairLabel.text('Pair Recipe With Wine?');
  winePairLabel.attr('class', 'inline')

  if (document.URL.includes("searchform.html")) {
    rfContainer.append(divEl)
    divEl.append(formEl)
    formEl.append(h3El, foodContainer, pairContainer, lineBreak, label2El, buttonEL)
    foodContainer.append(labelEl, inputEL)
    pairContainer.append(winePairLabel, input3El)
    label2El.append(input2EL)
  } else if (document.URL.includes("results.html")) {
    $('.results-main-container').append(divEl)
    divEl.append(formEl)
    formEl.append(h3El, foodContainer, pairContainer, lineBreak, label2El, buttonEL)
    foodContainer.append(labelEl, inputEL)
    pairContainer.append(winePairLabel, input3El)
    label2El.append(input2EL)
  } else if (document.URL.includes("saved.html")) {
    $('.saved-main-container').append(divEl)
    divEl.append(formEl)
    formEl.append(h3El, foodContainer, pairContainer, lineBreak, label2El, buttonEL)
    foodContainer.append(labelEl, inputEL)
    pairContainer.append(winePairLabel, input3El)
    label2El.append(input2EL)
  }
}

function cocktailFormGen() {
  if(cocktailVis === true){
    return
  }
  // Hides cocktail form and foodVis toggled to true and cocktailVis to false
  $('#form-1').remove()
  foodVis = false;
  cocktailVis = true;

  var divEl = $('<div>')
  var formEl = $('<form>')
  var h3El = $('<h3>')
  var labelEl = $('<label>')
  var inputEL = $('<input>')
  var buttonEL = $('<button>')
  var button2EL = $('<button>')
  var drinkContainer = $('<div>')

  divEl.attr({ 'id': "form-2", 'class': 'w-2/3 h-max gap-x-8 mx-auto mt-20' })
  formEl.attr({ 'id': "hungryForm", 'class': ' border border-double border-white  flex flex-col p-32 justify-center align-center gap-y-8 text-center' })
  h3El.text('Thirsty')
  labelEl.attr({ 'for': "drink-name", 'class': 'inline' })
  labelEl.text('Enter Drink ')
  inputEL.attr({ 'type': "text", 'id': "cocktail-input", 'class': 'inline ml-5 text-black' })

  buttonEL.attr({ 'id': "cocktails-submit", 'class': 'inline ml-5' })
  buttonEL.text('Search')
  button2EL.attr({ 'id': "feeling-advent", 'class': 'value=false' })
  button2EL.text('Feeling Adventurous?')
  h3El.attr('class', 'text-5xl');

  if (document.URL.includes("searchform.html")) {
    foodForm.attr('class', 'hidden');
    cocktailForm.attr('class', 'hidden');
    rfContainer.append(divEl);
    divEl.append(formEl);
    formEl.append(h3El);
    drinkContainer.append(labelEl, inputEL, buttonEL);
    formEl.append(drinkContainer, button2EL);
  } else if (document.URL.includes("results.html")) {
    foodForm.attr('class', 'hidden');
    cocktailForm.attr('class', 'hidden');
    $('.results-container').attr('class', 'hidden');
    $('.results-nested-container').attr('class', 'hidden');
    $('.results-main-container').append(divEl);
    divEl.append(formEl);
    formEl.append(h3El);
    drinkContainer.append(labelEl, inputEL, buttonEL);
    formEl.append(drinkContainer, button2EL);
  } else if (document.URL.includes("saved.html")) {
    foodForm.attr('class', 'hidden');
    cocktailForm.attr('class', 'hidden');
    $('.saved-container').attr('class', 'hidden');
    $('.search-form-container').attr('class', 'hidden');
    $('.saved-main-container').append(divEl);
    divEl.append(formEl);
    formEl.append(h3El);
    drinkContainer.append(labelEl, inputEL, buttonEL);
    formEl.append(drinkContainer, button2EL);
  }
}

