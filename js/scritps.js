function newItem() {
    // Adding a new item to the list
    let li= $('<li></li>');
    let inputValue= $('#input').val();
    li.append(inputValue);

    if ($('#input').val()=== '') {
        window.alert("You must write something!");
    } else {
        $('#list').append(li)
        $('#input').val('')

    }
    // Adding the delete button "X"
    let crossOutButton= $('<button></button>');
    crossOutButton.text('X');
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass('delete');
    };

    crossOutButton.on('click', deleteListItem);

    // Crossing out an item from the list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

    // Reordering the items
    $('#list').sortable();
}

// Add content when 'Enter' is pressed

$('#input').on('keypress', (event) => {
    if (event.key=== 'Enter') {
        event.preventDefault();
        newItem();
    }
});