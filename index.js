const questions = [
    {
        question: "What is the capital of India?",
        answers: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: "New Delhi"
    },
    {
        question: "Which is the national flower of India?",
        answers: ["Rose", "Lotus", "Sunflower", "Jasmine"],
        correct: "Lotus"
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        answers: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        correct: "Mahatma Gandhi"
    }
];

let currentQuestionIndex = 0;

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    document.getElementById('question-text').textContent = question.question;
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.onclick = () => checkAnswer(question.answers[index], question.correct);
    });
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-button').classList.add('hidden');
}

function checkAnswer(selected, correct) {
    const feedback = document.getElementById('feedback');
    if (selected === correct) {
        feedback.textContent = 'Correct!';
        feedback.style.color = '#33cc33';
    } else {
        feedback.textContent = 'Wrong answer. Try again!';
        feedback.style.color = '#ff0000';
    }
    feedback.classList.remove('hidden');
    document.getElementById('next-button').classList.remove('hidden');
}

document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        document.getElementById('question-text').textContent = 'Quiz Completed!';
        document.getElementById('answer-buttons').innerHTML = '';
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('next-button').classList.add('hidden');
    }
};
showQuestion(currentQuestionIndex);
