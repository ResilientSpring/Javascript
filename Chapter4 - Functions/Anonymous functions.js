function do_not_click() {
    window.alert("Do not click on my page!");
}

document.onclick = do_not_click;

document.onmousemove = function () {
    window.alert("Do not move the mouse on my page!");
}
