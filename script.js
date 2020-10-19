//constants on the application display
const start = document.getElementById("start"); 
const quiz = document.getElementById("quiz");
const questionImage = document.getElementById("questionImage");
const question = document.getElementById("question");
const qTimer = document.getElementById("qTimer");
const timerCount= document.getElementById("timerCount");
const timerGauge = document.getElementById("timerGauge");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const quizProgress = document.getElementById("quizProgress");
const userScore = document.getElementById("userScore");

//Questions array with 10 questions for quiz
let questions = [

    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"
    },
    {
        question : "what does this question ask #2?"
        imgSrc : "img2.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1" 
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"   
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"   
    }
    {
        question : "what does this question ask?"
        imgSrc : "img.png",
        choice1 : "This is the first answer",
        choice2 : "This is the second answer",
        choice3 : "this is the third answer"
        correct : "1"   
    }
];  

//setting the application to display the first condition in the questions array
let lastquestionIndex = questions.length - 1; 
let runningquestionIndex = 0;

//function to render quesiton on application
function questionRender (){
    let q = questions[runningquestionIndex];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
}

//function to create quiz progress display on application 
function progressRender(){
    for (let qIndex = 0; qIndex < lastquestionIndex.length; qIndex++) {
        quizProgress.innerHTML +="<div class='prog'id=" + qIndex + "></div>";
        }
}
//funciton for display if question is answered correctly
function correctAnswer(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
//funciton for display if question is answered incorrectly
function incorrectAnswer(){
    document.getElementById(runningquestionIndex).style.backgroundColor = "red";
}
//constant of question timer that will be displayed on application
const questionTime = 10; //10 seconds every question
const gaugeWidth = 150;
let count   =     0;
const gaugeProgressUnit = gaugeWidth/questionTime;
//function to for question timer to display progress left for each question

function counterRender(){
    if( count ,= questionTime ){
        counterRender.innerHTML = count;
        timerGauge.style.width = gaugeProgressUnit * count + "px" ;
        count++;
    }else{
        count = 0;
        incorrectAnswer();
        if( runningquestionIndex < lastquestionIndex){
            runningquestionIndex++;
            questionRender();

        }else{ clearInterval(TIMER);
        scoreRender(); }
    }
}

function checkAnswer(answer){
    if(questions[runningquestionIndex].correct == answer){
        score++;
        correctAnswer();
    }else{
        incorrectAnswer();
    }
    if (runningquestionIndex < lastquestionIndex){
        count = 0;
        runningquestionIndex++;
        questionRender();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
    }

start.addEventListener("click", startQuiz) ;

function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}