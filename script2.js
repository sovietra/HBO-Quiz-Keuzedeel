const questions = [
    {
        section: "Sectie 2: Beveiliging",
        question: "Waar staat de CIA Triad in cybersecurity voor?",
        answers: [
            "Vertrouwelijkheid, Integriteit, Beschikbaarheid",
            "Cryptografie, Intrusiedetectie, Authenticatie",
            "Controle, Onderzoek, Verzekering"
        ],
        correct: 0,
        image: "images/spirited-away-4.jpg"
    },
    {
        section: "Sectie 2: Beveiliging",
        question: "Bij welke aanval wordt de communicatie tussen twee partijen onderschept zonder dat zij het weten?",
        answers: [
            "Phishing",
            "Man-in-the-Middle (MITM)",
            "SQL-injectie",
            "Cross-Site Scripting (XSS)"
        ],
        correct: 1,
        image: "images/spirited-away-5.jpg"
    },
    {
        section: "Sectie 2: Beveiliging",
        question: "Wat is het doel van hashing in de beveiliging?",
        answers: [
            "Om gegevens te versleutelen voor veilige verzending",
            "Om wachtwoorden veilig op te slaan",
            "Om externe opdrachten uit te voeren",
            "Om bestanden te comprimeren"
        ],
        correct: 1,
        image: "images/spirited-away-6.jpg"
    },
    {
        section: "Sectie 2: Beveiliging",
        question: "Welke van de volgende is een voorbeeld van multi-factor authenticatie (MFA)?",
        answers: [
            "Alleen een wachtwoord invoeren",
            "Een vingerafdruk en een wachtwoord gebruiken",
            "Inloggen met alleen een e-mailadres"
        ],
        correct: 1,
        image: "images/spirited-away-1.jpg"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    const q = questions[currentQuestion];

    document.getElementById('progressFill').style.width = ((currentQuestion / questions.length) * 100) + '%';
    document.getElementById('questionCounter').textContent = `Vraag ${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('sectionLabel').textContent = q.section;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('questionCard').style.backgroundImage =
        `linear-gradient(rgba(15,15,15,0.72), rgba(15,15,15,0.88)), url(${q.image})`;

    const grid = document.getElementById('answersGrid');
    grid.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    q.answers.forEach(function(answer, index) {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-label">${labels[index]}</span>${answer}`;
        btn.addEventListener('click', function() { selectAnswer(index); });
        grid.appendChild(btn);
    });

    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.className = 'feedback';

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'none';

    answered = false;
}

function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(function(btn, i) {
        btn.disabled = true;
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === selectedIndex) {
            btn.classList.add('wrong');
        }
    });

    const feedback = document.getElementById('feedback');
    if (selectedIndex === q.correct) {
        score++;
        feedback.textContent = '✓ Correct!';
        feedback.className = 'feedback correct-feedback';
    } else {
        const labels = ['A', 'B', 'C', 'D'];
        feedback.textContent = `✗ Fout! Het juiste antwoord is: ${labels[q.correct]}: ${q.answers[q.correct]}`;
        feedback.className = 'feedback wrong-feedback';
    }

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = currentQuestion < questions.length - 1 ? 'Volgende vraag →' : 'Bekijk resultaat →';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('questionCard').style.display = 'none';
    const results = document.getElementById('results');
    results.style.display = 'flex';

    const percentage = Math.round((score / questions.length) * 100);
    let message;
    if (percentage >= 75) message = 'Uitstekend gedaan!';
    else if (percentage >= 50) message = 'Goed gedaan!';
    else message = 'Probeer het nog een keer!';

    document.getElementById('scoreDisplay').innerHTML =
        `<div class="score-circle">${score}/${questions.length}</div>
         <p class="score-percentage">${percentage}%</p>
         <p class="score-message">${message}</p>`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    document.getElementById('questionCard').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', function() {
    // Mouse trail
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    const colors = ['#eca34f', '#eca34f', '#eca34f', '#eca34f', '#eca34f', '#eca34f', '#eca32f', '#eca32f'];

    circles.forEach(function(circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener('mousemove', function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        circles.forEach(function(circle, index) {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.scale = (circles.length - index) / circles.length;
            circle.x = x;
            circle.y = y;
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        requestAnimationFrame(animateCircles);
    }

    animateCircles();

    loadQuestion();

    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
});
