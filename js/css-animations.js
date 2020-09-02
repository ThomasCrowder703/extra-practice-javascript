var button = document.getElementById("btn");


var animate = function () {
    button.className += " active";
}

button.addEventListener("click",animate)