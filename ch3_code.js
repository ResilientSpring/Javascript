var headingtext = "<h1>A Page of JavaScript</h1>";
var myintro = "Hello, welcome to my JavaScript page!";
var linktag = "<a href=\"http://www.scripttheweb.com\">Link to a Site</a>";
var redtext = "<span style='color: darkred'>I am so colorful today!</span>";
var begineffect = "<strong>";
var endeffect = "</strong>";
var beginpara = "<p>";
var endpara = "</p>";

document.write(headingtext);  // This writes the heading at the top of the page.

// Adding the begineffect and endeffect variables to the left and right of the myintro variable
// writes the introductory text in bold under the heading.
document.write(begineffect + myintro + endeffect);

// A new paragraph with a link, and then another new paragraph with the red text message.
document.write(beginpara + linktag + endpara);
document.write(beginpara + redtext + endpara);