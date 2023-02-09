function newItem() {
    // Adding a new item to the list
    let li= $('<li></li>');
    let inputValue= $('#input').val();
    li.append(inputValue);

    if ($('#input').val()=== '') {
        window.alert("You must write something!");
    } else {
        $('#list').append(li)
    }

    // Crossing out an item from the list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);
}