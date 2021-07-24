function get_added_text() {
    var textpart1 = "This is ";
    var textpart2 = "fun!";
    var addedtext = textpart1 + textpart2;
    return addedtext;
}

var alert_text = get_added_text();
window.alert(alert_text);

function weak_typed() {
    var textpart1 = "This is ";
    var textpart2 = "fun!";
    var addedtext = textpart1 + textpart2;
}

var alarming_text = weak_typed();
window.alert(alarming_text);
