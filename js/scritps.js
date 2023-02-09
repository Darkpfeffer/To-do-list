function newItem(){

    // Adding new item to the list
    let inputValue= $('#input').attr('value');

    if (inputValue=== '') {
        alert('You must write something!');
    } else {
        $('#list').append('<li></li>').text(inputValue);
        console.log(inputValue)
    }

    //Crossing out an item from the list
    function crossOut() {
        $('.active').toggleClass('strike')
    }

    $('li').on('dblclick', crossOut); 
}