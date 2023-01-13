
var drinkName = "margarita"

var spirit = "vodka"
var cocktailURLSpirit = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&i=` + spirit
var cocktailURLDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?key=1&s=${drinkName}`
// fetching a recipe by drink name 
fetch(cocktailURLDrinkName) 
  .then(function (response) {
    return response.json();
  })
  .then(function(dataDrinkName){
    console.log(dataDrinkName)
  })

  // fetching a list by spirit 
fetch(cocktailURLDrinkName) 
.then(function (response) {
  return response.json();
})
.then(function(dataSpirit){
  console.log(dataSpirit)
})

  // fetching a Random drink
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php") 
  .then(function (response) {
    return response.json();
  })
  .then(function(dataRandom){
    console.log(dataRandom)
  })

  // //
  // fetch(cocktailURLDrinkName) 
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function(dataDrinkName){
  //   console.log(dataDrinkName)
  // })
  
 