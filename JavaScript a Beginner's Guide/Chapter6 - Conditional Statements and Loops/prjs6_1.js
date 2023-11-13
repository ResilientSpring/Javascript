let msg = "";
var city = window.prompt("What is the name of your city?", "Kaohsiung City");

if ((city == null) || (city === ""))
    msg = "No city entered. Cannot determine delivery availability";
else
    switch (city) {

        case "John\'s town":
            msg = "We can have items delivered to you in 3 days.";
            break;
        case "Donville":
            msg = "We can have items delivered to you in 1 week.";
            break;
        case "Danieltown":
            msg = "We can have items delivered to you in 2 weeks."
            break;
        case "Martyville":
            msg = "We can have items delivered to you in 2 weeks.";
            break;
        default:
            msg = "Sorry! We do not deliver to your city yet.";
    }

document.write(msg);

