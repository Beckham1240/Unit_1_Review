"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Beckham Le
   Date:  1/9/20 

*/
//runs the function showClock every second
showClock();

setInterval("showClock()", 1000);


function showClock(){
   //Takes the current time and date and sets it for localDate and localTime and also creates a new variable called thisDay
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   
   //Inputs the values of the variables localDate and localTime in for the HTML
   document.getElementById("currentTime").innerHTML = "<span>"+localDate+"</span>"+"<span>"+localTime+ "</span>";
   
   //sets nextJuly4 as the same value as thisDay and makes j4Date equal to nextJuly4
   nextJuly4(thisDay);
   var j4Date = nextJuly4(thisDay);

   //setting the end time to 9pm
   j4Date.setHours("21");
   
   //the calculations for the amount of days, hours, minutes, and seconds left
   var days = (j4Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60; 

   //sets the values of the variables above to put into the ids of the HTML identified below (EX:dLeft)
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.ceil(secs);
}


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

