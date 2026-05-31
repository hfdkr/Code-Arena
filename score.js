document.addEventListener('DOMContentLoaded', () => {
    const score = parseInt(sessionStorage.getItem('quizScore')) || 0;
    const answers = JSON.parse(sessionStorage.getItem('quizAnswers')) || [];
    const category = sessionStorage.getItem('quizCategory') || 'HTML';

    const totalQuestions = answers.length;
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const incorrectAnswers = answers.filter(a => !a.isCorrect && a.selected !== null).length;
    const skippedAnswers = answers.filter(a => a.selected === null).length;
    const percentage = totalQuestions > 0 ? Math.round((score / (totalQuestions * 10)) * 100) : 0;

    let emoji = '🔥';
    let title = 'Excellent !';
    let message = 'Vous maîtrisez les bases.';

    if (percentage >= 80) {
        emoji = '🔥';
        title = 'Excellent !';
        message = `Vous maîtrisez ${category}. Continuez comme ça !`;
    } else if (percentage >= 60) {
        emoji = '⭐';
        title = 'Bien joué !';
        message = `Vous progressez bien en ${category}.`;
    } else if (percentage >= 40) {
        emoji = '💡';
        title = 'Pas mal !';
        message = `Vous avez de bonnes bases en ${category}.`;
    } else {
        emoji = '📚';
        title = 'Continuez vos efforts !';
        message = `Entraînez-vous pour améliorer votre ${category}.`;
    }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('incorrectCount').textContent = incorrectAnswers;
    document.getElementById('skippedCount').textContent = skippedAnswers;
    document.getElementById('totalPoints').textContent = score;

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    document.getElementById('progressCircle').style.strokeDashoffset = offset;
});