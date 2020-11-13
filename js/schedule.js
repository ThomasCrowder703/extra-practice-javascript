const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
let requestedDays = [];

$("#userSubmit").click(function () {
   requestedDays.push($("#userRequest").val())
    console.log(requestedDays);
   let userConfirm = confirm("Are you sure this is the day you wan to take off?");
   if(userConfirm === true){
       $("#userSubmit").hide();
       let newSchedule =[];
       for(let i =0; i< weekdays.length; i++){
           if(weekdays[i] !== requestedDays[0]){
               newSchedule.push(weekdays[i]);
           }
       }
       console.log(newSchedule);
   }else{
       requestedDays = [];
   }


})





