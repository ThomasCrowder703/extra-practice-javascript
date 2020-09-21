const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"]
let requestedDays = []

$("#userSubmit").click(function () {
   requestedDays.push($("#userRequest").val())
    console.log(requestedDays)

    if(requestedDays[1] !== requestedDays[0]){

    }

})

    // for(var i = 0; i <= 1; i++){
    //     requestedDays.push($("#userRequest").val())
    // }
    console.log(requestedDays)


function determineWork(x) {
    for(var i = 0; i < weekdays.length; i++){

    }
}

determineWork(weekdays);
