//Array generator
var randomArray = []
   for (var i = 0; i<= 9 ; i++)
    {
        randomArray.push(Math.round(Math.random() * (9)))
    }
    console.log(randomArray);



//Array converter
function convert(x) {
    x.unshift("(");
    x.splice(4,0, ") ");
    x.splice(8,0, "-");
    var stringNumbers = x.join('');
    console.log(stringNumbers);




}
//function call
convert(randomArray)