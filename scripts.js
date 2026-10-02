function checkAnswer() {
    alert("Hello there!");
}

function playAgain() {
    alert("Hello there!");
}

function generateQuestion() {
    
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.random() * 3];
    console.log(num1 + operator + num2);
}
let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

