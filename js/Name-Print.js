(function() {
"use strict"

var userName = prompt("What is your name?")

var peopleNames = ["Jeffery","Steven","Suzy","Sean","Shaun","Anthony",userName]
function guessName(name){
   for(name = 0; name <= peopleNames.length;name++) {
       if (name === peopleNames.indexOf(userName)){
           console.log(peopleNames[name] + ": This is your name")
       } else {
           console.log(peopleNames[name] + ": This is not your name")
       }
   }

}

    guessName();


}());