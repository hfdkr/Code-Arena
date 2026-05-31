function escapeHTML(str) {
    return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

let currentQuestionIndex = 0;
let selectedCategory = sessionStorage.getItem('quizCategory') || 'HTML';
let selectedDifficulty = sessionStorage.getItem('quizDifficulty') || 'easy';
let score = 0;
let answers = [];
let timerInterval;
let timeRemaining = 30;
let answered = false;

let quiz;
let questions;

function initializeQuiz() {
    if (!quizData || !quizData[selectedCategory]) {
        console.error(`Quiz data not found for category: ${selectedCategory}`);
        return;
    }
    quiz = quizData[selectedCategory];
    questions = quiz.questions;
}

function updateTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = timeRemaining;
    
    if (timeRemaining <= 5) {
        timerDisplay.classList.add('text-errorRed', 'border-errorRed');
        timerDisplay.classList.remove('text-brandBlue', 'border-brandBlue');
    }

    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        handleTimeout();
    }
    timeRemaining--;
}

function startTimer() {
    timeRemaining = 30;
    answered = false;
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.classList.remove('text-errorRed', 'border-errorRed');
    timerDisplay.classList.add('text-brandBlue', 'border-brandBlue');
    
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}