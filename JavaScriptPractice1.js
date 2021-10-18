/* Front End Web Design and Dev
   10/05/21
   JavaScript Practice 1
   @author: Sami Cemek
*/

//1_Question
var pi = 3.14 ;
var radius = 5 ;

var circle_area= (pi * radius*radius) ;

console.log(circle_area);

//2_Question
var i;
for(i = 0; i < 7; i++){

    if(i%2 == 1){
        console.log( i + " is odd");
    }
    else if(i%2 == 0){
        console.log( i + " is even");
    }
}

//3_Question
var int1;
var int2;

if (int1 > int2 ){
    console.log("int1 is bigger than int2");
}
else if(int2 > int1){
    console.log("int2 is bigger than int1");
}
else{
    console.log("int1 and int2 is equal to each other");
}

//4_Question
var currrentTemp;

if (currrentTemp > 85 ){
    console.log("SUNNY");
}
else if( 84 > currrentTemp > 68){
    console.log("PLEASANT");
}
else if(68 > currrentTemp){
    console.log("COLD");
}

//5_Question
var int1 = window.prompt("Please input the first number");
var int2 = window.prompt("Please input the second number");

if (int1 > int2 ){
    console.log("int1 is bigger than int2");
}
else if(int2 > int1){
    console.log("int2 is bigger than int1");
}
else{
    console.log("int1 and int2 is equal to each other");
}

//6_Question
var i;
for(i = 0; i < 101; i++){
  if(i%15 == 0){
  console.log("Fizzbuzz");
  	}
    
	else if(i%3 == 0){
		console.log("Fizz");
  	}
    
  else if (i%5 == 0){
		console.log("Buzz");
  	}
   else{
   console.log(i);
   }
    
}

//7_Question

var today = new Date();

//The targeted lenght of day is two digit so if the day number is single digit, then it will add 0 to the beginning of it.
var TodayDay = String(today.getDate()).padStart(2, '0');
//January is 0 therefore we added 1. The targeted lenght of month is two digit
//so if the month number is single digit, then it will add 0 to the beginning of it.
//Example: 10/05/21 
var TodayMonth = String(today.getMonth() + 1).padStart(2, '0'); 
var TodayYear = today.getFullYear();

//We can also use this way to print today's date:
// todayDate = new Date().toLocaleDateString()

var todayDate = (TodayMonth + "/" + TodayDay + "/" + TodayYear)
console.log("Today's date is: " + todayDate);


//WORKING ON RIGHT NOW, Different Version of printing today's date
if(TodayDate.getDay() == 0){
	TodayString == "Sunday" ;
}
if(TodayDate.getDay() == 1){
	TodayString == "Monday" ;
}
if(TodayDate.getDay() == 2){
	TodayString == "Tuesday" ;
}
if(TodayDate.getDay() == 3){
	TodayString == "Wednesday" ;
}
if(TodayDate.getDay() == 4){
	TodayString == "Thursday" ;
}
if(TodayDate.getDay() == 5){
	TodayString == "Friday" ;
}
if(TodayDate.getDay() == 6){
	TodayString == "Saturday" ;
}

var TodayString;

const TodayDate = new Date('October 5, 2021 10:05:30');
var days = []

if(TodayDate.getDay() == 2){
	TodayString = "Tuesday";
  console.log("Today is " + TodayString);
}

