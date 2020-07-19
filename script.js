var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var score = 0;
var questionIndex = 0;
var secondsLeft = 60;
var timerStart = false;
var penalty = 10;


var questions = [
    {
        ask: "LOREM IPSUM",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        ask: "LOREM IPSUM",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
   
    timer.addEventListener("click", function () {
