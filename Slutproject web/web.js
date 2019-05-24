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
