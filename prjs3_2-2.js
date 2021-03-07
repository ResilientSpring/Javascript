var myheading = "<h1>This is my web page!</h1>",
    sometext = "This text can be affected by other statements",
    linktag = "<a href=\"https://www.wikipedia.org\">Web Site link!</a> ",
    begineffect = "<strong>",
    endeffect = "</strong>",
    beginpara = "<p>",
    endpara = "</p>";

document.write(myheading);
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endpara);
document.write(beginpara + sometext + endpara);
