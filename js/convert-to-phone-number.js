var numbers = [1,2,3,4,5,6,7,8,9,0];


function convert(x) {
    x.unshift("(");
    x.splice(4,0, ") ");
    x.splice(8,0, "-");
    var stringNumbers = x.join('');
    console.log(stringNumbers);




}

convert(numbers)