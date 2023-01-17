// create elements
var savedContainer = $('#saved-container');
// grabb items from localStorage
loadItems();
function loadItems() {
    var formObj = JSON.parse(localStorage.getItem('formObj')) ;
    console.log("test");
    var saveItems;
    if (localStorage.getItem('formObj') !== null) {
        console.log(formObj);
        for (var i = 0; i < formObj.length; i++) {
            saveItems = formObj[i];
            var event1 = JSON.parse(localStorage.getItem(saveItems));
            let event2;
            console.log(event1);
            for (var j = 0; i < event1.length; j++){
                event2 = event1[j];
                console.log(event2)
            }
        }
        return;
    } else {
        console.log('no items');
    }
}

// localStorage.RemoveItem('formObj')

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
listedItem.attr('src',)
    // what
    // creating attributes to the created elements
    // how
    // adding the jquery object .attr
    // why
    // to give characters to the created elements