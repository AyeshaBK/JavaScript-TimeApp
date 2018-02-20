/*function playMaths(){

var num1 = 5;
var num2 = 24;

var sum = num1 + num2;

document.write(num1 + " + " + num2 + " = " + sum);
}

function aboutMe(){
	document.write("programming starts with yourself");
}*/

function findTime(){
	var x = new Date();
	var hour = x.getHours();
	var minutes = x.getMinutes();
	var seconds = x.getSeconds();
	
	document.write("the time is " + hour + " : "  + minutes + " : " + seconds);
}