function check_alert(pcheck){
    window.alert("You make $ " + pcheck);
}

var paycheck = 1200;
check_alert(paycheck);

function check_alert2(pcheck, car){
    window.alert("You make $ " + pcheck + " and have a " + car);
}

check_alert2(1200, "Corvette");

check_alert2();

function check_alert3(pcheck, car) {
    if (pcheck && car) window.alert("You make $" + pcheck + " and have a " + car);
    else window.alert("My arguments are missing!");
}

check_alert3();