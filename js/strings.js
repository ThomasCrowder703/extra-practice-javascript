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

}());