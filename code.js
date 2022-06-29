const dateToday=()=>{
var h = new Date();
var m = new Date();
var s = new Date();
var today = new Date(); 
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
time = h.getHours() + ':' + m.getMinutes() + ':' + s.getSeconds();
document.getElementById("date").innerHTML=today;
document.getElementById("time").innerHTML = time;
}
setInterval(function(){
   dateToday();
    },1000);
   
    

