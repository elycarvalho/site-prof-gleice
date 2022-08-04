// seleciona todos os elementos
const start = document.getElementById("inicio");
const btnIniciar = document.getElementById("btnIniciar")
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


// criar variaveis das perguntas
let questions = [
    {
        question : "pergunta  nivel 1",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 2",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "errada",
        choiceB : "correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 3",
        imgSrc : "img/jogos/thinking3.gif",
        choiceA : "errada",
        choiceB : "errada",
        choiceC : "essa é a resposta correta",
        correct : "C"
    },{
        question : "pergunta 4",
        imgSrc : "img/jogos/thinking4.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "incorrect",
        correct : "A"
    },{
        question : "pergunta 5",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "resposta errada",
        choiceB : "Correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 6",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 7",
        imgSrc : "img/jogos/thinking4.gif",
        choiceA : "errada",
        choiceB : "certa",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 8",
        imgSrc : "img/jogos/thinking3.gif",
        choiceA : "errada",
        choiceB : "correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 9",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "errada",
        choiceB : "errada",
        choiceC : "correta",
        correct : "C"
    },{
        question : "pergunta final",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    }
];

//perguntas do nivel 2
let questions2 = [
    {
        question : "pergunta nivel 2",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 2",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "errada",
        choiceB : "correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 3",
        imgSrc : "img/jogos/thinking3.gif",
        choiceA : "errada",
        choiceB : "errada",
        choiceC : "essa é a resposta correta",
        correct : "C"
    },{
        question : "pergunta 4",
        imgSrc : "img/jogos/thinking4.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "incorrect",
        correct : "A"
    },{
        question : "pergunta 5",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "resposta errada",
        choiceB : "Correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 6",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 7",
        imgSrc : "img/jogos/thinking4.gif",
        choiceA : "errada",
        choiceB : "certa",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 8",
        imgSrc : "img/jogos/thinking3.gif",
        choiceA : "errada",
        choiceB : "correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 9",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "errada",
        choiceB : "errada",
        choiceC : "correta",
        correct : "C"
    },{
        question : "pergunta final",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    }
];

//perguntas do nivel 3
let questions3 = [
    {
        question : "pergunta nivel 3",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 2",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "errada",
        choiceB : "correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 3",
        imgSrc : "img/jogos/thinking3.gif",
        choiceA : "errada",
        choiceB : "errada",
        choiceC : "essa é a resposta correta",
        correct : "C"
    },{
        question : "pergunta 4",
        imgSrc : "img/jogos/thinking4.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "incorrect",
        correct : "A"
    },{
        question : "pergunta 5",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "resposta errada",
        choiceB : "Correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 6",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    },{
        question : "pergunta 7",
        imgSrc : "img/jogos/thinking4.gif",
        choiceA : "errada",
        choiceB : "certa",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 8",
        imgSrc : "img/jogos/thinking3.gif",
        choiceA : "errada",
        choiceB : "correta",
        choiceC : "errada",
        correct : "B"
    },{
        question : "pergunta 9",
        imgSrc : "img/jogos/thinking.gif",
        choiceA : "errada",
        choiceB : "errada",
        choiceC : "correta",
        correct : "C"
    },{
        question : "pergunta final",
        imgSrc : "img/jogos/thinking2.gif",
        choiceA : "correta",
        choiceB : "errada",
        choiceC : "errada",
        correct : "A"
    }
];
// cria algumas variáveis
    const lastQuestion = questions.length - 1;
    let runningQuestion = 0;
    let count = 0;
    const questionTime = 25; // 25s
    const gaugeWidth = 100; // 150px
    const gaugeUnit = gaugeWidth / questionTime;
    let TIMER;
    let score = 0;

// renderiza uma pergunta
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


btnIniciar.addEventListener("click",startQuiz);

// inicia quiz
function startQuiz(){
    let niveis = document.getElementById("niveis").value;
    switch (niveis) {
        case 'nivel2':
          questions = questions2;
          console.log = questions;
          break;
        case 'nivel3':
          questions = questions3;
          break;
    }
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "grid";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// renderiza barra de progresso
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// renderiza contador

function renderCounter(){
    if(count <= questionTime){
        contador.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // muda cor da barra de progresso p/ vermelho
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // encerra o quiz e mostra pontuação
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checa a resposta

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // resposta correta
        score++;
        // muda cor da barra de progresso para verde
        answerIsCorrect();
    }else{
        // resposta errada
        // muda cor da barra de progresso p/ vermelho
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // encerra o quiz e mostra a pontuação
        clearInterval(TIMER);
        scoreRender();
    }
}

// quando a resposta for correta
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// quando a resposta estiver errada
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// renderiza pontuação
function scoreRender(){
    scoreDiv.style.display = "block";
    // calcula a porcentagem de respostas corretas
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // escolhe a imagem de acordo com a pontuação final
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

 





















