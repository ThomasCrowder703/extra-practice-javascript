"use strict"

var values = function (x) {
    let html = "<div>"
    html += "it works"

    html += "</div>"
    return html
}


document.getElementById('value-buttons').addEventListener('click', values);

var addition = function add(x,y) {
    return x + y;
}

var subtraction = function sub(x,y) {
    return x - y;
}

var multiplication = function mult(x,y) {
    return x * y
}

var division = function divi(x,y) {
    return x / y;
}