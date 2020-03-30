
function timer(){
var eventDate = new Date("april 14, 2020").getTime();
var currentDate = new Date().getTime();
var remainTime = eventDate-currentDate;

var seconds = Math.floor(remainTime/1000);
var minutes = Math.floor(seconds/60);
var hours = Math.floor(minutes/60);
var days = Math.floor(hours/24);

var h = hours%24;
var m = minutes%60;
var s = seconds%60;

days = days<10?"0"+days:days;
h = h<10?"0"+h:h;
m = m<10?"0"+m:m;
s = s<10?"0"+s:s;

if(days<0){
	document.getElementById('show1').style.display = 'none';
	document.getElementById('show2').style.display = 'block';
}


document.getElementById('date').innerHTML = days;
document.getElementById('hour').innerHTML = h;
document.getElementById('minute').innerHTML = m;
document.getElementById('second').innerHTML = s;
}

setInterval(timer,1000);