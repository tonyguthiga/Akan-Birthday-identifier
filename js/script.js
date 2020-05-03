var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function getAkanName() { 
var date = parseInt(document.getElementById("d").value);
var month = parseInt(document.getElementById("m").value);
var year = parseInt(document.getElementById("yy").value);
var maleName = document.getElementById("mn").value;
var femaleName = document.getElementById("fn").value;
 
  if(day <=0 || day >31){
      alert("Please enter valid day")
  }
  else if(month <=0 || month >12 || (month == 2 && day > 29)){
     alert("Please enter valid month") 
  }
var a = (14 - month) / 12
// var y = year - a                         
// var m = month + 12 * a - 2
// var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m / 12)) % 7);
  

var newDate = new Date(day + "/" + month + "/" + year);
var d = newDate.getDay()

  if(maleAkanNames.checked == true){
     alert("You were born on " + day[d] + " and your Akan name would be: " + maleAkanNames[d])

  }
  else if(femaleAkanNames.checked == true){
    alert("You were born on " + day[d] + " and your Akan name would be: " + femaleAkanNames[d])
  }
}