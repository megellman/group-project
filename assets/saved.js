// create elements
var savedContainer = $('.saved-container');

// grab items from localStorage
loadItems();
function loadItems() {
    var formObj = JSON.parse(localStorage.getItem('formObj')) ;
    console.log("test");
    var saveItems;
    if (localStorage.getItem('formObj') !== null) {
        for (var i = 0; i < formObj.length; i++) {
            saveItems = formObj[i];
            var title = JSON.parse(localStorage.getItem(saveItems));
            console.log(title)
            var entries = Object.entries(title);
            var data = entries.map(([key, val] = entry) => {
                var entryContainer = $('<div>');
                var entryTitle = $('<h2>');
                var entryContent = $('<p>');
                
                entryTitle.text(key);
                entryContent.text(val);

                entryTitle.attr('class', 'saved-title');
                entryContent.attr('class', 'saved-content');
                entryContainer.attr('class', 'saved-container');

                entryContainer.append(entryTitle, entryContent);
                entryContainer.appendTo(savedContainer);
            });
            data;
        }
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