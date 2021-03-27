function show_message_1 () {

    // This alert doesn't happen until the function is called.
    window.alert("This is alert #1!");
}

function show_messages_2 () {

    // Again, this alert doesn't happen until the function is called.
    window.alert("This is alert #2!");
}

show_messages_2();  // The show_message_2 function is called first!
show_message_1();   // This show_message_1 function is called second!

