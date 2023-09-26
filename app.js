const cards = [
  'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F',
  'G', 'G', 'H', 'H'
];

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.card = card;
  cardElement.textContent = card;

  cardElement.addEventListener('click', flipCard);

  return cardElement;
}

function flipCard() {
  if (flippedCards.length < 2) {
    const card = this;
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      const card1Value = firstCard.dataset.card;
      const card2Value = secondCard.dataset.card;

      if (card1Value === card2Value) {
        matchedCards.push(card1Value);
        if (matchedCards.length === cards.length / 2) {
          alert('Congratulations! You won!');
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
        }, 1000);
      }

      flippedCards = [];
    }
  }
}

function initGame() {
  const gameContainer = document.querySelector('.memory-game');
  shuffle(cards);

  cards.forEach(card => {
    const cardElement = createCard(card);
    gameContainer.appendChild(cardElement);
  });
}

initGame();