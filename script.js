var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");

var score = 0;
var questionIndex = 0;
var secondsLeft = 90;
var timerStart = false;
var penalty = 10;
var ulCreate = document.createElement("ul");

var questions = [
    {
        ask: "What is the capital of California?",
        options: ["Sacramento", "Los Angeles", "San Diego", "San Francisco"],
        answer: "Sacramento"
    },
    {
        ask: "What ancient civilization began between the Tigris and Euphrates rivers?",
        options: ["Rome", "Greece", "Mesopotamia", "Egypt"],
        answer: "Mesopotamia"
    },
    {
        ask: "How many Great Lakes are there?",
        options: ["Three", "Five", "Seven", "Nine"],
        answer: "Five"
    },
    {
        ask: "What is the smallest Great Lake?",
        options: ["Lake Huron", "Lake Michigan", "Lake Erie", "Lake Ontario"],
        answer: "Lake Ontario"
    },
    {
        ask: "The United Kingdoms is made up of how many countries?",
        options: ["Two", "Three", "Four", "Five"],
        answer: "Four"
    },
    {
        ask: "Which state is the Grand Canyon located in?",
        options: ["New Mexico", "Arizona", "Nevada", "Utah"],
        answer: "Arizona"
    },
    {
        ask: "What is the only vowel not used as the first letter in a U.S. State",
        options: ["A", "E", "I", "U"],
        answer: "E"
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

function scorePage() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(timerStart);
        createP.textContent = "Your final score is: " + timeRemaining;
        questionsDiv.appendChild(createP2);
    }

    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your initials: ";
    questionsDiv.appendChild(newLabel);

    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "initials");
    newInput.textContent = "";
    questionsDiv.appendChild(newInput);

    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("id", "Submit");
    newSubmit.textContent = "Submit";
    questionsDiv.appendChild(newSubmit);

    newSubmit.addEventListener("click", function () {
        var initials = newInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }

            console.log(finalScore);

            var allScores = localStorage.getItem("allScores");
            
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
        }

    });

}


