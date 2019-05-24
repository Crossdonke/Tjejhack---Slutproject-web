$('.carousel').carousel({
  interval: 3000
})
function kollasvar(){

var fråga1 = document.quiz.fråga1.value;
var fråga2 = document.quiz.fråga2.value;
var fråga3 = document.quiz.fråga3.value;
var correct= 0;

if (fråga1 == "Monthy Python") {
	correct++;
}
if (fråga2 == "Turtle") {
	correct++;
}
if (fråga3 == "Textprogrammering") {
	correct++;
}



document.getElementById("inskickatsvar").style.visibility="visible";
document.getElementById("antalratt").innerHTML = "Du fick " + correct + " Rätt";
}
var countDownDate = new Date("May 29, 2019").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "Nästa Tjejhack är om " + days + "dagar " + hours + "timmar "
  + minutes + "minuter " + seconds + "sekunder ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
