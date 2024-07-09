const puzzleContainer = document.getElementById('puzzle-container');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const revealButton = document.getElementById('reveal-button');

const imagePieces = [];
const imageUrl = 'beautiful-smart-girl.jpg'; // Вставте URL вашого зображення
const questions = [
    "Яке ваше улюблене хобі?",
    "Яка ваша улюблена книга?",
    "Який ваш улюблений фільм?",
    "Яке ваше улюблене місце для відпочинку?"
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
