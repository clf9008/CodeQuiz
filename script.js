// select all elements
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

// create our questions
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
        imgSrc : "assets/JeffGordon.jpg",
        choice1 : "Jeff Gordon",
        choice2 : "Richard Petty",
        choice3 : "Tony Stewart",
        correct : "1"
    },
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 90;
const questionTime = 90; // 90s
const subtractTime = 3;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--
    }else{
        count = 90;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        //clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "assets/5.jpg" :
              (scorePerCent >= 60) ? "assets/4.jpg" :
              (scorePerCent >= 40) ? "assets/3.jpg" :
              (scorePerCent >= 20) ? "assets/2.jpg" :
              "assets/1.jpg height: 200px width: 200px";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

