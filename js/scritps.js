function newItem() {
// Adding a new item to the list
    let inputValue= $('#input').val();

    if ($('#input').val()=== '') {
        window.alert("You must write something!");
    } else {
        $('#list').append('<li>'+ inputValue+ '</li>');
    }
}