const highScoreList = document.getElementById("highScore");
const highScores = JSON.parse(localStorage.getItem('highScore')) || [];
highScoreList.innerhtml = highScore
.map( score => {
    return '<li class="high-score">${score.name}-${score.score}</li>';
}).join("");