let msg = "";
var city = window.prompt("What is the name of your city?", "Kaohsiung City");
var items = 0;

if ((city == null) || (city === ""))
    msg = "No city entered. Cannot determine delivery availability";
else
    switch (city) {

        case "John\'s town":
            msg = "We can have items delivered to you in 3 days.";
            items = 10;
            break;
        case "Don\'ville":
            msg = "We can have items delivered to you in 1 week.";
            items = 5;
            break;
        case "Daniel's town":
            msg = "We can have items delivered to you in 2 weeks."
            items = 2;
            break;
        case "Marty's ville":
            msg = "We can have items delivered to you in 2 weeks.";
            items = 2;
            break;
        default:
            msg = "Sorry! We do not deliver to your city yet.";
            items = 0;
    }

document.write(msg);

if (items > 0){

    document.write(

        "<p>We can deliver up to " + items + " items to your city.</p>"

    );

    document.write(

        "<p>Print this out, write your item numbers below. " +
        "and mail it to us to order.</p>"

    )


    for (let count = 1; count <= items; count++)
        document.write(count + "._________________<br>");

}

