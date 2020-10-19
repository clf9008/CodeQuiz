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
array = [ a, b, c, d] 
let lastquestionIndex = questions.length - 1; 
let runningquestionIndex = 0;

function questionRender (){
    let q = questions[runningquestionIndex];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
}

function progressRender(){
    for (let qIndex = 0; qIndex < lastquestionIndex.length; qIndex++) {
        quizProgress.innerHTML +="<div class='prog'id=" + qIndex + "></div>";
        }
}
function correctAnswer(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
function incorrectAnswer(){
    document.getElementById(runningquestionIndex).style.backgroundColor = "red";
}

