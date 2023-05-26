//define the 4 familly of the 52 cards cardgame
var cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];
//define two empty table for cards of the player and the GM
var PlayerCards = [];
var GmCards = [];
//define score variable
var score = document.getElementById("score");
var scoreIndex = 0; 
var scoreValue = 0;
var j = 0;
//Define value for each cards
var CardsValues = {
  '2h': 2,
  '2d': 2,
  '2c': 2,
  '2s': 2,
  '3h': 3,
  '3d': 3,
  '3c': 3,
  '3s': 3,
  '4h': 4,
  '4d': 4,
  '4c': 4,
  '4s': 4,
  '5h': 5,
  '5d': 5,
  '5c': 5,
  '5s': 5,
  '6h': 6,
  '6d': 6,
  '6c': 6,
  '6s': 6,
  '7h': 7,
  '7d': 7,
  '7c': 7,
  '7s': 7,
  '8h': 8,
  '8d': 8,
  '8c': 8,
  '8s': 8,
  '9h': 9,
  '9d': 9,
  '9c': 9,
  '9s': 9,
  '10h': 10,
  '10d': 10,
  '10c': 10,
  '10s': 10,
  'Vh': 10,
  'Vd': 10,
  'Vc': 10,
  'Vs': 10,
  'Qh': 10,
  'Qd': 10,
  'Qc': 10,
  'Qs': 10,
  'Kh': 10,
  'Kd': 10,
  'Kc': 10,
  'Ks': 10,
  '1h': 11,
  '1d': 11,
  '1c': 11,
  '1s': 11,
}
function HandValue() {
  for (scoreIndex; scoreIndex < PlayerCards.length; scoreIndex++) {
    scoreValue += CardsValues[PlayerCards[j]];
    j++;
  }
}

//Function to get a random/new card
function RandomCard() {
  return Math.floor(Math.random()*cgCards.length);
}
function NewCardPlayer() {
  var randomCard = RandomCard();
  var PlayerCard = cgCards[randomCard];
  cgCards.splice(randomCard, 1); //remove the card taken in the table cgCards
  PlayerCards.push(PlayerCard); //push the random card obtained in the table of the player
}
function NewCardGm() {
  var randomCard = RandomCard();
  var GmCard = cgCards[randomCard];
  cgCards.splice(randomCard, 1); //same as the top
  GmCards.push(GmCard); //same as the top
}

//Event to launch game when player click on the button start
document.getElementById("play").addEventListener('click', PlayGame);
function PlayGame() {
    console.clear();
  //clear the cards and hands when start new game
  PlayerCards = [];
  GmCards = [];
  score.innerHTML = "0";
  scoreIndex = 0; 
  scoreValue = 0;
  j = 0;
  cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];

  //Give two random cards to the player and GM
  for (var i = 0; i<2; i++) {
    NewCardPlayer();
    NewCardGm();
  }
  HandValue();
  score.innerHTML = scoreValue;
  //console infos
  console.log('Cartes du joueur : ',PlayerCards);
  console.log('Cartes du GM :',GmCards);
}

//Event to draw cards to add them to the hand of the player
document.getElementById("draw").addEventListener('click', DrawCard);
function DrawCard() {
  NewCardPlayer();
    console.log('Cartes du joueur : ',PlayerCards);
}