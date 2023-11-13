let msg = "";
var city = window.prompt("What is the name of your city?", "Kaohsiung City");

if ((city == null) || (city === ""))
    msg = "No city entered. Cannot determine delivery availability";
else
    switch (city) {

        case "John\'stown":
            msg = "We can have items delivered to you in 3 days.";

    }

