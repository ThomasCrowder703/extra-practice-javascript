"use strict"

var shopperBook = prompt("How many books would you like to buy?");
var shopperMusic = prompt("How many music CD's would you like to buy?");
var shopperChocolate = prompt("How much chocolate would you like to buy?");
var tax = 0.10


var items = [
    {
        amount: shopperBook,
        name: "Book",
        class: "Books",
        price: 12.49
    },
    {
        amount: shopperMusic,
        name: "Music CD",
        class: "Recreation",
        price: 14.99
    },
    {
        amount: shopperChocolate,
        name: "Chocolate Bar",
        class:"Food",
        price: 0.85
    }

];

items.forEach(function (item) {
    var taxPrice = (item.price * tax)+item.price;
    if (item.class === "Books" || item.class === "Food" || item.class === "Medicine"){
        console.log(item.amount + " " + item.name + " " + (item.price * item.amount).toFixed(2));
    } else{
        console.log(item.amount + " " + item.name + " : " + (taxPrice * item.amount).toFixed(2));
    }

})


