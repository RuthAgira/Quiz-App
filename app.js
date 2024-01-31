const questions = [
    {
        question: "Java script is an ------------ language?" ,
        answers: [
        { text: "Object-oriented", correct: true},
        { text: "Object-Based" , correct: false},
        { text: "Procedural", correct: false},
        { text: "None of the above", correct:false},
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [
           { text: "const", correct: true},
           { text: "var",  correct: false},
           { text: "let", correct: false},
           { text: "constant", correct:false},
        ]

    },
    {
        question: "Which of the following keywords is used to define a variable in javascript?",
        answers: [
           { text: "var",  correct: true},
           { text: "let", correct: false},
           { text: "Both A and B", correct: false},
           { text: "None of the above", correct:false},
        ]
    },
    {
        question: "JavaScript is the programming language of the _",
        answers: [
           { text: "Desktop", correct: false},
           { text: "Mobile", correct: false},
           { text: "Web", correct: true},
           { text: "Server",  correct:false},
        ]
    },
    {
        question: "What key word is used to check whether a given property is valid or not?",
        answers: [
           { text: " is in", correct: false},
           { text: "in", correct: true},
           { text: "exists", correct: false},
           { text: "lies",  correct:false},
        ]
    },
    {
        question: "Which of the following is not a Jvascript framework?",
        answers: [
           { text: "Node",  correct: false},
           { text: "Cassandra", correct: true},
           { text: "Vue",  correct: false},
           { text: "React",  correct:false},
        ]
    },
    {
        question: "Which event occours when the user clicks on an HTML element?",
        answers: [
           { text: "onmouseover",  correct: false},
           { text: "onmouseclick", correct: false},
           { text: "onchange", correct: false},
           { text: "onclick", correct:true},
        ]
    },
    {
        question: "Which of the following are closures in Javascript?",
        answers: [
           { text: "Variables", correct: false},
           { text: "Functions",  correct: false},
           { text: "Objects", correct: true},
           { text: "All the above", correct:false},
        ]
    },
    {
        question: "When an operator's value is NULL, the type of returned by the unary operator is?",
        answers: [
           { text:  "Boolean", correct: false},
           { text:  "Undefined", correct: false},
           { text: "Integer",  correct: false},
           { text: "Object",  correct:true},
        ]
    },
    {
        question: "Inside which HTML element do we put javaScript?",
        answers: [
           { text: "scripting", correct: false},
           { text: "js", correct: false},
           { text:  "javascript", correct: false},
           { text: "script", correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function  startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
    function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . "  + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
    }
        Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";

    function showScore (){
    resetState();
    questionElement.innerHTML = 'You Scored ${score} out of $ {questions.length}!';
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

    function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQustion();
     }else{
        showScore();
     }
    
}
    nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }
});

    function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); 
 }
}


startQuiz();