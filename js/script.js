var daysOfTheWeek= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function getAkanName(){ 
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");
 
  if(day <=0 || day >31){
      alert("Please enter valid day")
  }
  else if(month <=0 || month >12 || (month == 2 && day > 29)){
     alert("Please enter valid month") 
  }

  var newDate = new Date(day + "-" + month + "-" + year);
  var d = newDate.getDay()

  if(male.checked == true){
     alert("You were born on " + daysOfTheWeek[0] + " and your Akan name would be: " + maleNames[0]);
  }
  else if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[1] + " and your Akan name would be: " + maleNames[1]);
 }
 else if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[2] + " and your Akan name would be: " + maleNames[2]);
 }
 else if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[3] + " and your Akan name would be: " + maleNames[3]);
 }
 else if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[4] + " and your Akan name would be: " + maleNames[4]);
 }
 else if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[5] + " and your Akan name would be: " + maleNames[5]);
 }
 else if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[6] + " and your Akan name would be: " + maleNames[6]);
 }
 if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[0] + " and your Akan name would be: " + femaleNames[0]);
  }
  else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[1] + " and your Akan name would be: " + femaleNames[1]);
  }
  else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[2] + " and your Akan name would be: " + femaleNames[2]);
  }
  else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[3] + " and your Akan name would be: " + femaleNames[3]);
  }
  else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[4] + " and your Akan name would be: " + femaleNames[4]);
  }
  else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[5] + " and your Akan name would be: " + femaleNames[5]);
  } else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[6] + " and your Akan name would be: " + femaleNames[6]);
  }
}