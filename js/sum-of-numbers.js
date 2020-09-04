"use strict"

var shouldBeTrue = [1,2,3,4,5,13,20,48]
var shouldBeFalse = [1,2,3,4,5,8,3000]

function reverse(x) {
    var reversedArray = x.reverse();
    if (reversedArray[0] ===  reversedArray.reduce((a, b) => a + b, 0) - reversedArray[0] ){
        console.log(true)
    } else{
        console.log(false)
    }

}


reverse(shouldBeTrue);
reverse(shouldBeFalse)






