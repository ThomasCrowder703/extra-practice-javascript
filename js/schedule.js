const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"]
let requestedDays = []

$("#userSubmit").click(function () {
    console.log($("#userRequest").val())
})

    for(var i = 0; i <= 1; i++){
        requestedDays.push($("#userRequest").val())
    }
    console.log(requestedDays)


function determineWork(x) {
    for(var i = 0; i < weekdays.length; i++){

    }
}

determineWork(weekdays);

$("#userSubmit").click(function () {
    console.log($("#userRequest").val())
})