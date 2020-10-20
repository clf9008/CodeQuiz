
//creating constants to store into Global Memroy 
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('highScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
//creating a constant of highScore that will take the most recent score and add it to the highScore list
const highScore = JSON.parse(localStorage.getItem("highScore",)) || [];
console.log(highScore);
finalScore.innterText=mostRecentScore
username.addEventListener('keyup', () =>{
// console.log(username.value);
saveScoreBtn.enabled = username.value;
})
//saveHighScore function that generates a list and orders the scores from highest to lowest with a total of 5 scores containted and the lowest always dropped
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
//Store highScore into local memory and stringify it
localStorage.setItem("highScore", JSON.stringify(highScore));
};
