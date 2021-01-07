var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var MAX_HIGH_SCORES = 5;

//get most recent score from local storage
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (event) => {
    event.preventDefault();

    var score = {
        score: mostRecentScore,
        name: username.value,
    };

    //sort high scores and trim off the 6th score
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    //save high score to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    //go home
    window.location.assign("./index.html");
};