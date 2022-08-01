// select all elements
const start = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const pergunta = document.getElementById("pergunta");
const qImg = document.getElementById("pergImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("contador");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progresso");
const scoreDiv = document.getElementById("containerPontos");

// create our perguntas
let perguntas = [
    {
        pergunta : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        pergunta : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        pergunta : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        pergunta : "What is the correct answer?",
        imgSrc : "img/js.png",
        choiceA : "correct",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "A"
    },{
        pergunta : "which word is correct?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        pergunta : "is this correct?",
        imgSrc : "img/js.png",
        choiceA : "correct",
        choiceB : "Wrong",
        choiceC : "wrong",
        correct : "A"
    },{
        pergunta : "What does MD stand for in this file: readme.md?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Markdown",
        choiceC : "Wrong",
        correct : "B"
    },{
        pergunta : "which one is the right image?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "correct",
        choiceC : "wrong",
        correct : "B"
    },{
        pergunta : "What does AMID stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "wrong",
        choiceC : "correct",
        correct : "C"
    },{
        pergunta : "What does it mean?",
        imgSrc : "img/js.png",
        choiceA : "correct",
        choiceB : "Wrong",
        choiceC : "wrong",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 25; // 25s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    inicio.style.display = "none";
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
        contador.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
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
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).innerHTML = "<img src='img/correct.png'>";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).innerHTML = "<img src='img/wrong.png'>";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















