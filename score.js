document.addEventListener('DOMContentLoaded', () => {
    const score = parseInt(sessionStorage.getItem('quizScore')) || 0;
    const answers = JSON.parse(sessionStorage.getItem('quizAnswers')) || [];
    const category = sessionStorage.getItem('quizCategory') || 'HTML';

    const totalQuestions = answers.length;
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const incorrectAnswers = answers.filter(a => !a.isCorrect && a.selected !== null).length;
    const skippedAnswers = answers.filter(a => a.selected === null).length;
    const percentage = totalQuestions > 0 ? Math.round((score / (totalQuestions * 10)) * 100) : 0;
});