console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

  if (cardTwo === cardFour || cardOne === cardThree) {
    alert('Sorry, try again.');
  } else if (cardOne === cardTwo || cardThree === cardFour) {
    alert('You found a match!');
  }
