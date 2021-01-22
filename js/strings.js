(function() {
    "use strict"
    console.log("working")

//    Palindrome

    function isPalindrome(string) {
        let reverseWord = string.split('').reverse().join(''); //split by character, reverse, join back
        console.log(reverseWord === string)
        return reverseWord === string;
    }

    isPalindrome("racecar") //true
    isPalindrome("codeup") //false

    //Fizz buzz

    for(let i = 0; i <= 30; i++){
        if(i % 15 === 0){
            console.log("Fizzbuzz " + i)
        }else if (i % 3 === 0) {
            console.log("fizz " + i)
        }else if(i % 5 === 0){
            console.log("buzz " + i)
        }else{
            console.log(i);
        }
    }



}());