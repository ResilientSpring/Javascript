var mycar = "Honda";
var paycheck = 1200;

function new_car(){
    mycar = 'Ferrari';
    paycheck = 3500;
    window.alert("You need $" + paycheck + " to get a " + mycar);
}

new_car();

window.alert("You make $" + paycheck + " and have a " + mycar);
