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