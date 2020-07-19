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
        ask: "LOREM IPSUM?",
        options: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        ask: "test?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
];
timer.addEventListener("click", function () {
    if (timerStart === false) {
        timerStart = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(timerStart);
                scorePage();
                currentTime.textContent = "Out of time!";
            }
        }, 1000);
    }
    render(questionIndex);
});
function render(questionIndex) {

    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].ask;
        var userOptions = questions[questionIndex].options;
        questionsDiv.textContent = userQuestion;
    }
    userOptions.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
        } else {
            secondsLeft = secondsLeft - penalty;
        }
    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        scorePage();
        createDiv.textContent = "You got  " + score + "/" + questions.length + " Right!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}

function scorePage(){

}
