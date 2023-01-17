// create elements
var savedContainer = $('.container');

// grab items from localStorage
loadItems();
function loadItems() {
    var formObj = JSON.parse(localStorage.getItem('formObj')) ;
    console.log("test");
    var saveItems;
    if (localStorage.getItem('formObj') !== null) {
        for (var i = 0; i < formObj.length; i++) {
            saveItems = formObj[i];
            var categoryHeader = $('<h1>');
            var entryContainer = $('<div>');
            
            categoryHeader.text(saveItems);

            entryContainer.attr('class', 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6')
            categoryHeader.attr('class', 'font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white-900')
            
            categoryHeader.appendTo(savedContainer);
            entryContainer.appendTo(savedContainer);
            
            var title = JSON.parse(localStorage.getItem(saveItems));
            console.log(title)
            var entries = Object.entries(title);
            var data = entries.map(([key, val] = entry) => {
                var contentContainer = $('<div>');
                var entryTitle = $('<h2>');
                var entryContent = $('<p>');
                
                entryTitle.text(key);
                entryContent.text(val);

                entryTitle.attr('class', 'text-xl text-gray-700 font-bold mb-2');
                entryContent.attr('class', 'text-base text-gray-600 font-normal leading-6');
                contentContainer.attr('class', 'w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center');

                contentContainer.append(entryTitle, entryContent);
                contentContainer.appendTo(entryContainer);
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