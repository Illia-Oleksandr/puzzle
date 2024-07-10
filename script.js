const puzzleContainer = document.getElementById('puzzle-container');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const revealButton = document.getElementById('reveal-button');

const imagePieces = [];
const imageUrl = 'beautiful-smart-girl.jpg'; // Вставте URL вашого зображення
const questions = [
    "Яка твоя улюблена вправа або спортивний захід?",
    "Як ти підтримуєш мотивацію в досягненні своїх цілей?",
    "Який твій улюблений фільм?",
    "Яка твоя улюблена страва для сніданку?",
    "Як ти підтримуєш здоровий спосіб життя?",
    "Що ти найбільше любиш у своїй роботі чи навчанні?",
    "Як ти справляєшся з конфліктами?",
    "Як ти відчуваєш себе під час публічних виступів?",
    "Якби ти могла володіти будь-яким супергеройським умінням, що б це було?",
    "Як ти розслабляєшся після важкого дня?",
    "Що ти найбільше любиш у своєму місті?",
    "Який твій улюблений вид мистецтва?",
    "Яка твоя улюблена порода собак (або кішок)?",
    "Який твій улюблений колір і чому?",
    "Що тебе найбільше надихає?",
    "Якби ти могла змінити щось у світі, що б це було?"
]; // Приклади запитань
let currentPiece;

for (let i = 0; i < 16; i++) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.dataset.index = i;
    piece.innerHTML = `<span>${i + 1}</span>`;
    imagePieces.push(piece);
    puzzleContainer.appendChild(piece);
}

puzzleContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.puzzle-piece');
    if (target) {
        currentPiece = target;
        showQuestion();
    }
});

revealButton.addEventListener('click', () => {
    revealPiece(currentPiece);
    hideQuestion();
    puzzleContainer.classList.add('hidden-bg');
});

function showQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.innerText = questions[randomIndex];
    questionContainer.classList.remove('hidden');
}

function hideQuestion() {
    questionContainer.classList.add('hidden');
}

function revealPiece(piece) {
    const index = piece.dataset.index;
    piece.style.backgroundImage = `url(${imageUrl})`;
    piece.style.backgroundPosition = `${(index % 4) * -100}px ${Math.floor(index / 4) * -100}px`;
    piece.classList.add('revealed');
    piece.innerHTML = '';
}
