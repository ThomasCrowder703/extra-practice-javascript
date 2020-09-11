// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a numPets for their owned pets. The function should return the sum of every object's numPets property.


var teachersPets = ([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2},
])
//11

function totalPets(x) {
    var sum = 0;
    x.forEach(function (pet) {
        sum += pet.pets
    })
    console.log(sum);
}


totalPets(teachersPets)