console.log("JS file is connected to HTML! Woo!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
    alert("Yay! You win!");

  } else {
    alert("Yay! You LOSE!")
  }
  // for (var i = 0; i < cards.length)
}

var gameBoard = document.getElementById('game-board');
var cards = shuffleArray(['queen', 'queen', 'king', 'king']);
var cardsInPlay = [];

var createCards = function() {
  for (var i = 0; i < cards.length; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    gameBoard.appendChild(card);
    card.setAttribute('data-card', cards[i]);
    card.addEventListener('click', isTwoCards);
    // if (this.getAttribute('data-card') === 'king') {
    //   card.innerHTML = '<img src="king.png" alt="King" />';
    // } else {
    //   card.innerHTML = '<img src="queen.png" alt="Queen" />';
    // }
  }
};

function isTwoCards() {
  cardType = this.getAttribute('data-card');
  cardsInPlay.push(cardType);

  if (cardType === 'king') {
    this.innerHTML = '<img src="king.png" alt="King" />';
  } else {
    this.innerHTML = '<img src="queen.png" alt="Queen" />';
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

createCards();
