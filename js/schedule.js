const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"]

function determineWork(x) {
    for(var i = 0; i < weekdays.length; i++){
        if(weekdays[i] === "Saturday" || weekdays[i] === "Sunday"){
            console.log("You do not work on " + weekdays[i])
        }else{
            console.log("You work on " + weekdays[i])
        }
    }
}

determineWork(weekdays);

$("#userSubmit").click(function () {
    console.log($("#userRequest").val())
})