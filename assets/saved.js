// create elements
var savedContainer = $('#saved-container');





// grabb items from localStorage

function loadItems() {
    retrieveItems();
    if (localStorage.getItem('formObj') != null) {
        var formObj = JSON.parse(localStorage.getItem('formObj'))
        for (var i = 0; i < formObj.length; i++) {
            console.log('formObj', formObj[i])

        }
    } else if (formObj.length == 0) {
        console.log('no items')

    }
}



function retrieveItem() {
    if (food == true) {
        food = localStorage.getItem("food")
    } else if (drinkName == true) {
        drinkName = localStorage.getItem("drinkName")
    } else if (wine == true) {
        wine = localStorage.getItem("wine")
    } else if (randomName == true) {
        randomName = localStorage.getItem("randomName")
    } else if (wineP == true) {
        wineP = localStorage.getItem("wine")
    }
}

// create and display items from localStorage
var devEl = $('<div>')
var cardEl = $('<section>')
var unorderList = $('<ul>')
var listedItem = $('<li>')
// what
// creating a card for each item that has been saved to localStorage
// how
// creating elements to display the card
// why
// for the user to save their items
devEl.attr('class', 'dev-element')
cardEl.attr('class', 'card-element w-24 h-48 border')
unorderList.attr('class', 'unorder-list')
listedItem.attr('class', '')
listedItem.attr('src', recipeUrl)
    // what
    // creating attributes to the created elements
    // how
    // adding the jquery object .attr
    // why
    // to give characters to the created elements