const questions =[
    {
        question: "How do you write 'Hello World' in an alert box?"
        answers: [
           {text: alertBox('Hello World'), correct: true},
           {text: alert('Hello World'), correct: false},
           {text: msg('Hello World'), correct: false},
           {text: msgBox('Hello World'), correct:false},
        ]
    },
    {
        question: "What is the correct way to write a javaScript array?"
        answers: [
           { text: "var colors" = "red", "green", "blue", correct: false},
           { text: "var colors"["red","green", "blue"],  correct: true},
           { text: "var=1 =("red"),2=("green"), 3= ("blue")", correct: false},
           { text: "var colors (1:"red"), (2:"green"), (3:"blue")", correct:false},
        ]

    },
    {
        question: "How do round the number 7.25, to the nearest interger?"
        answers: [
           {text: "round(7.25)",  correct: false},
           {text: "math.round(7.25)", correct: true},
           {text: "md(7.25)", correct: false},
           {text: "math.rnd(7.25)", correct:false},
        ]
    },
    {
        question: "JavaScript is the programming language of the _"
        answers: [
           {text: 'Desktop', correct: false},
           {text: 'Mobile', correct: false},
           {text: 'Web', correct: true},
           {text: 'Server',  correct:false},
        ]
    },
    {
        question: "How does FOR loop start?"
        answers: [
           {text: "for(i=0;i<5)", correct: false},
           {text: "for(i=0; i<5; i++", correct: true},
           {text: "for i=1-5", correct: false},
           {text: "for(i<5; i++)",  correct:false},
        ]
    },
    {
        question: "Which operator is used to sign a variable?"
        answers: [
           {text: "-",  correct: false},
           {text: "=", correct: true},
           {text: "*",  correct: false},
           {text: "+",  correct:false},
        ]
    },
    {
        question: "Which event occours when the user clicks on an HTML element?"
        answers: [
           {text: "onmouseover",  correct: false},
           {text: "onmouseclick", correct: false},
           {text: "onchange", correct: false},
           {text: "onclick", correct:true},
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?"
        answers: [
           {text: "top(x,y)", correct: false},
           {text: "math.ceil(x,y)",  correct: false},
           {text: " math.max(x,y)", correct: true},
           {text: "cei(x,y)", correct:false},
        ]
    },
    {
        question: "How to write an IF statement in javascript?"
        answers: [
           {text:  "if i = 5 then", correct: false},
           {text:  "if i ==5 then", correct: false},
           {text: "if i = 5",  correct: false},
           {text: "if (i==5)",  correct:true},
        ]
    },
    {
        question: "Inside which HTML element do we put javaScript?"
        answers: [
           {text: "scripting", correct: false},
           {text: "js", correct: false},
           {text:  "javascript", correct: false},
           {text: "script", correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function  Quiz App(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQustion();
}
function showQustion(){
    let currentQuestion = questions[QuestionsIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button;)
    });
    
}
