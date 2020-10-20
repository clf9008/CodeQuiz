const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('highScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScore = JSON.parse(localStorage.getItem("highScore",)) || [];
console.log(highScore);
finalScore.innterText=mostRecentScore
username.addEventListener('keyup', () =>{
// console.log(username.value);
saveScoreBtn.enabled = username.value;
})

saveHighScore = e => {
console.log("clicked the Save Button")
e.preventDefault();

const score = {
    score: Math.floor(Math.random()*100),
    name: username.value
};
//Add the score to your array and sort by score, drop the lowest of 5 scores 
highScore.push(score);
console.log(highScore);
highScore.sort( (a,b) => b.score - a.score);
highScore.splice(5);

localStorage.setItem("highScore", JSON.stringify(highScore));
};
