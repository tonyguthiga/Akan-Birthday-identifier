var daysOftheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function getAkanName(){ 
var date = parseInt(document.getElementById("day").value);
var month = parseInt(document.getElementById("month").value);
var year = parseInt(document.getElementById("year").value);
var maleName = document.getElementById("male");
var femaleName = document.getElementById("female");
 
  if(day <=0 || day >31){
      alert("Please enter valid day")
  }
  else if(month <=0 || month >12 || (month == 2 && day > 29)){
     alert("Please enter valid month") 
  }

  var newDate = new Date(day + "-" + month + "-" + year);
  var d = newDate.getDay()

  if(male.checked == true){
     alert("You were born on " + daysOftheWeek[d] + " and your Akan name would be: " + maleNames[d])
  }
  else if(female.checked == true){
    alert("You were born on " + daysOftheWeek[d] + " and your Akan name would be: " + femaleNames[d])
  }
}