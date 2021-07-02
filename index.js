var dt = new Date();

function RenderDate(){
dt.setDate(1);
var day = dt.getDay();
console.log(dt.getDay());
//This method is used to get the correct number of days for each month
var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1, //to get the current month
    0
).getDate();

var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(), //to get the previous month's last dates
    0
).getDate();

var today =  new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"];

document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("Month").innerHTML = months[dt.getMonth()];

var cell = "";

for(x = day; x>0; x--){
    cell+= "<div class='prev-date'>" + (prevDate - x + 1) + "</div>";
}

for(i = 1; i<= endDate; i++){

    if(i == today.getDate() && dt.getMonth() == today.getMonth()){
        cell+= "<div class='today'>" + i + "</div>";
    }

    else{
    cell+= "<div>" + i + "</div>";
    }
}

document.getElementsByClassName("Ddays")[0].innerHTML = cell; 
}

function moveDate(para){
   if(para == 'prevsign'){
       dt.setMonth(dt.getMonth() - 1);
       RenderDate();
   }
  
    else if(para == 'nextsign'){
        dt.setMonth(dt.getMonth() + 1);
        RenderDate();
    }
   
}
