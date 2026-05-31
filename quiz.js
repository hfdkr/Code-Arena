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

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    const remaining = totalQuestions - (currentQuestionIndex + 1);
    
    // Update Text & Progress
    document.getElementById('tracker').textContent = `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;
    document.getElementById('remaining').textContent = `${remaining} restante${remaining !== 1 ? 's' : ''}`;
    document.getElementById('question').textContent = q.question;
    document.getElementById('progress').style.width = ((currentQuestionIndex + 1) / totalQuestions) * 100 + '%';
    
    // Update Subject Tag
    document.getElementById('tag-subject').textContent = selectedCategory;
    
    // Update Difficulty Tag
    document.getElementById('tag-difficulty').textContent = selectedDifficulty === 'easy' ? 'Facile' : 'Moyen';

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    // Create Option Buttons
    q.options.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx); 
        const btn = document.createElement('button');
        
        btn.className = 'option-btn flex items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-systemBackground border border-transparent hover:border-borderSubtle transition-all w-full text-left group cursor-pointer shadow-sm';
        btn.dataset.index = idx;
        btn.dataset.option = opt;
        
        const displayText = opt.trim() === "" ? "None of the above" : escapeHTML(opt);
        
        btn.innerHTML = `
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-textMuted font-mono text-xs md:text-sm mr-4 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
                ${letter}
            </div>
            <span class="font-mono text-sm md:text-base text-gray-300 leading-tight">
                ${displayText}
            </span>
        `;
        
        btn.addEventListener('click', () => {
            if (!answered) {
                handleAnswer(opt, btn);
            }
        });
        
        container.appendChild(btn);
    });

    startTimer();
}

function handleAnswer(selectedAnswer, btn) {
    answered = true;
    clearInterval(timerInterval);
    
    const q = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === q.answer;
    
    // Record answer
    answers.push({
        question: q.question,
        selected: selectedAnswer,
        correct: q.answer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        score += 10;
        btn.classList.add('border-successGlow', 'bg-successGlow/10');
        btn.classList.remove('hover:border-borderSubtle', 'bg-systemBackground');
    } else {
        btn.classList.add('border-errorRed', 'bg-errorRed/10');
        btn.classList.remove('hover:border-borderSubtle', 'bg-systemBackground');
        
        // Highlight correct answer
        const options = document.querySelectorAll('.option-btn');
        options.forEach(opt => {
            if (opt.dataset.option === q.answer) {
                opt.classList.add('border-successGlow', 'bg-successGlow/10');
                opt.classList.remove('hover:border-borderSubtle', 'bg-systemBackground');
            }
        });
    }

    document.getElementById('scoreDisplay').textContent = score + ' pts';
    
    // Auto advance after 1.5 seconds
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1500);
}

function handleTimeout() {
    if (!answered) {
        answered = true;
        
        // Record as skipped
        const q = questions[currentQuestionIndex];
        answers.push({
            question: q.question,
            selected: null,
            correct: q.answer,
            isCorrect: false
        });

        // Highlight correct answer
        const options = document.querySelectorAll('.option-btn');
        options.forEach(opt => {
            if (opt.dataset.option === q.answer) {
                opt.classList.add('border-successGlow', 'bg-successGlow/10');
            }
        });

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                endQuiz();
            }
        }, 1500);
    }
}

function handleSkip() {
    if (!answered) {
        answered = true;
        clearInterval(timerInterval);
        
        const q = questions[currentQuestionIndex];
        answers.push({
            question: q.question,
            selected: null,
            correct: q.answer,
            isCorrect: false
        });

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            endQuiz();
        }
    }
}