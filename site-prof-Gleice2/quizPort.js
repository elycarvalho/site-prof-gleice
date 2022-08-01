// select all elements
const start = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const question = document.getElementById("pergunta");
const qImg = document.getElementById("pergImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("contador");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progresso");
const scoreDiv = document.getElementById("containerPontos");

// create our questions
let questions = [
    {
        question : "pergunta 1",
        imgSrc : "img/pensar.gif",
        choiceA : "correct",
        choiceB : "errada",
        choiceC : "resposta errada",
        correct : "A"
    },{
        question : "pergunta 2",
        imgSrc : "img/thinking2.gif",
        choiceA : "Wrong",
        choiceB : "resposta correta",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "pergunta 3",
        imgSrc : "img/thinking4.gif",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "essa é a resposta correta",
        correct : "C"
    },{
        question : "pergunta 4",
        imgSrc : "img/thinking3.gif",
        choiceA : "correta",
        choiceB : "Wrong",
        choiceC : "incorrect",
        correct : "A"
    },{
        question : "pergunta 5",
        imgSrc : "img/pensar.gif",
        choiceA : "resposta errada",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "pergunta 6",
        imgSrc : "img/thinking2.gif",
        choiceA : "correct",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 7",
        imgSrc : "img/thinking3.gif",
        choiceA : "Wrong",
        choiceB : "certa",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "pergunta 8",
        imgSrc : "img/thinking4.gif",
        choiceA : "errada",
        choiceB : "correct",
        choiceC : "wrong",
        correct : "B"
    },{
        question : "pergunta 9",
        imgSrc : "img/pensar.gif",
        choiceA : "Wrong",
        choiceB : "wrong",
        choiceC : "correct",
        correct : "C"
    },{
        question : "pergunta final",
        imgSrc : "img/thinking2.gif",
        choiceA : "correta",
        choiceB : "Wrong",
        choiceC : "errada",
        correct : "A"
    }
];

// create some variables
    const lastQuestion = questions.length - 1;
    let runningQuestion = 0;
    let count = 0;
    const questionTime = 25; // 25s
    const gaugeWidth = 100; // 150px
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
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "grid";
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
    let img = (scorePerCent >= 80) ? "img/congrats.gif" :
              (scorePerCent >= 60) ? "img/congrats2.gif" :
              (scorePerCent >= 40) ? "img/thumbDown.gif" :
              (scorePerCent >= 20) ? "img/crying.gif" :
              "img/crying.gif";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += `<button id="btnReinicia" onclick="reinicia()">Reiniciar</button>`;
}

function reinicia(){
    location.reload();
}

 





















