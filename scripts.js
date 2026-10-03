function checkAnswer() {
    num1 = Number(num1);
    num2 = Number(num2);
    let userAnswer = Number(document.getElementById("answer").value);
    let correctAnswer;

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    }

    const message = document.getElementById("message");
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
        message.textContent = "Correct!";
        message.classList.add("correct");
        message.classList.remove("wrong");
    } else {
        message.textContent = "Wrong!";
        message.classList.add("wrong");
        message.classList.remove("correct");
    }

    if (score >= 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
        return;
    }

    generateQuestion();
}

function playAgain() {
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    document.getElementById("answer").value = "";
    const message = document.getElementById("message");
    message.textContent = "";
    message.classList.remove("correct", "wrong");
    generateQuestion();
}

function generateQuestion() {
    
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.floor(Math.random() * operators.length)];
    document.getElementById("question").textContent = 
    `${num1} ${operator} ${num2} = ?`;
}
let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

