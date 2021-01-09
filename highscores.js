var resetScores = document.getElementById("resetScores");
var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

resetScores.addEventListener("click", function() {
    localStorage.clear();
    highScoresList.innerHTML = "";
});
// list high scores with initials
highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");