// elements to be stored in Global Memeory
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// creating the questions that will be asked
let questions = [
    {
        question : "In what year did Dale Earnhardt win the Rookie of the Year award",
        imgSrc : "assets/Rookie.jpg",
        choice1 : "1979",
        choice2 : "1980",
        choice3 : "1983",
        correct : "1"
    },{
        question : "How many championships did Dale Earnhardt win?",
        imgSrc : "assets/Champ.jpg",
        choice1 : "3",
        choice2 : "5",
        choice3 : "7",
        correct : "3"
    },{
        question : "At what track did Dale Earnhardt earn his last victory?",
        imgSrc : "assets/Victory.jpg",
        choice1 : "Daytona ",
        choice2 : "Talladega",
        choice3 : "Bristol",
        correct : "2"
    },{
        question : "What year did Dale Earnhardt win his 7th Nascar Cup Series Championship?",
        imgSrc : "assets/seven.jpg",
        choice1 : "1990",
        choice2 : "1988",
        choice3 : "1994",
        correct : "3"
    },
    {
        question : "Who was Dale Earnhardt's greatest rival?",
        imgSrc : "assets/Rivals.jpg",
        choice1 : "Jeff Gordon",
        choice2 : "Richard Petty",
        choice3 : "Tony Stewart",
        correct : "1"
    },
];

//declaring variables to be stored in Global Memory
const lastQuestion = questions.length - 1; //variable to move questions forward
let runningQuestion = 0; //variable for the current question pulled up in the 'question' array
let count = 90; //the time that the user will have on the quiz --90 seconds
const questionTime = 90; // 90seconds time on quiz
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime; 
let TIMER;
let score = 0; 

// function to call a question up one webpage is loaded
function renderQuestion(){
    let q = questions[runningQuestion];
    localStorage.setItem('mostRecentScore', score);
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
}
//Click event listener to start the quiz
start.addEventListener("click",startQuiz);

// start quiz function
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s handling correct timing
}

//fucntion to show the progress of the user on the quiz
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
//function to show the time left on the quiz
function renderCounter(){
    //start count at 90 and decremement 
// count = 90
console.log(count)
counter.innerHTML = count;
timeGauge.style.width = count * gaugeUnit + "px";
 if (count<= 0) {
   count=0; 
} else {
    count--;
    
   
}
    
}


//function to check the answer of a quetions, If it is correct, progress shows green, else if it is incorrect, it shows progress red

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green if correct
        answerIsCorrect();
    }else{
        // change progress color to red if the answer is wrong
        answerIsWrong();
    
        
    }
    // count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        // clearInterval(TIMER);
        // count = 0
    scoreRender();
    // scoreRender();
    }
}

//funcction to check in an anwer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

//function to check if an answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    count -=3
}

//function to display the score once the user has completed the quiz. 
function scoreRender(){
    scoreDiv.style.display = "block";
    //clearInterval(TIMER);
    count = 0
    //calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    //choose the image based on the scorePerCent the user got on the quiz
    let img = (scorePerCent >= 80) ? "assets/5.jpg" :
              (scorePerCent >= 60) ? "assets/4.jpg" :
              (scorePerCent >= 40) ? "assets/3.jpg" :
              (scorePerCent >= 20) ? "assets/2.jpg" :
              "assets/1.jpg height: 200px width: 200px";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

