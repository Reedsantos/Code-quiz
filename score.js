// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");

// On click to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Get data from local storage and turns it into an object
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Go back button
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});