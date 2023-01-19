// create elements
var savedContainer = $('.saved-container');

// grab items from localStorage
loadItems();
function loadItems() {
    var formObj = JSON.parse(localStorage.getItem('formObj')) ;
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
            var entries = Object.entries(title);
            var data = entries.map(([key, val] = entry) => {
                var contentContainer = $('<div>');
                var entryTitle = $('<h3>');
                var entryContent = $('<p>');
                
                entryTitle.text(key);
                entryContent.text(val);

                entryTitle.attr('class', 'text-5xl saveboxtext');
                entryContent.attr('class', 'text-base text-black font-normal leading-6');
                contentContainer.attr('class', 'leading-relaxed recipe px-6 py-4 border-4 border-green-800 border-double my-5 savedBox');

                contentContainer.append(entryTitle, entryContent);
                contentContainer.appendTo(entryContainer);
            });
            data;
        }
    } else {
        console.log('no items');
    }
}
