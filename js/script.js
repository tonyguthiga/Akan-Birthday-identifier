var day=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function getAkanName() {
    var dayOfBirth = parseInt(document.getElementById("day").value);
    var monthOfBirth = parseInt(document.getElementById("month").value);
    var yearOfBirth = parseInt(document.getElementById("year").value);
    var maleName = document.getElementById("male");
    var femaleName = document.getElementById("female");
if(day <=0 || day > 31){
    alert("Incorrect day!!Please enter a valid date!")
   }
else(month <=0 || month > 12) 
    alert("Incorrect month!!Please enter a valid month!")
   }
   var day =new date(day + month + year);
   var yourBirthday = day.getDay();
   if(male.checked == true){
       alert("You were born on " + "dayOfWeek[yourBirthday]" + (" your Akan name is ") + ("maleAkanname[yourBirthday]"));
   }
} 
