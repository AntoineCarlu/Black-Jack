//define the 52 cards in the cardgame
var cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];
//define two empty table for hands of the player and the GM
var PlayerCards = [];
var GmCards = [];
//define score variables
const score = document.getElementById("score");
const scoreGm = document.getElementById("scoreGm");
var scoreValue = 0;
var scoreValueGm = 0;
var scoreIndex = 0; 
var scoreIndexGm = 0; 
var j = 0;
var jGm = 0;
var maxScore = 21;
//define buttons
const buttonPlay = document.getElementById("play");
const buttonDraw = document.getElementById("draw");
const buttonStop = document.getElementById("stop");
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

//Function to reset values of variables
function DefaultValues() {
  cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];
  PlayerCards = [];
  GmCards = [];
  score.innerHTML = "";
  scoreGm.innerHTML = "";
  scoreValue = 0;
  scoreValueGm = 0;
  scoreIndex = 0; 
  scoreIndexGm = 0;
  j = 0;
  jGm = 0;
}
//Function to get the value of the hands
function PlayerHandValue() {
  for (scoreIndex; scoreIndex < PlayerCards.length; scoreIndex++) {
    scoreValue += CardsValues[PlayerCards[j]];
    j++;
    //release loop if scoreIndex is inferior of the numbers of cards in the hand to calculate all cards in the hand. 
    //in the loop : add the value of the card in the hand to the scoreValue variable
  }
}
function GmHandValue() {
  for (scoreIndexGm; scoreIndexGm < GmCards.length; scoreIndexGm++) {
    scoreValueGm += CardsValues[GmCards[jGm]];
    jGm++;
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
//Function to show loose or win texts, and reset game
function LooseScenario() {
    console.log('Perdu !');
  //disable buttons to play
  buttonPlay.disabled = true;
  buttonDraw.disabled = true;
  buttonStop.disabled = true;
  //create elements to show loose text and reset game
  var resetDiv = document.getElementById("reset");
  var looseText = document.createElement('p');
  var buttonReset = document.createElement('button');
  if (scoreValue > maxScore) {looseText.textContent = "Vous avez perdu ! Votre main est supérieur au score maximum ("+maxScore+").";}
  else if (scoreValue < scoreValueGm) {looseText.textContent = "Vous avez perdu ! Votre main est inférieur à celle du Croupier.";}
  else if (scoreValue == scoreValueGm) {looseText.textContent = "Vous avez perdu ! La main du Croupier égalise votre main.";}
  else {looseText.textContent = "Erreur";}
  buttonReset.textContent = "Rejouer";
  resetDiv.appendChild(looseText);
  resetDiv.appendChild(buttonReset);

  //Reset game if click on reset button
  buttonReset.addEventListener('click', ResetGame);
  function ResetGame() {
    //reset to original value all variables
    DefaultValues();
    //delete loose or win text
    looseText.remove();
    buttonReset.remove();
    //active button to play
    buttonPlay.disabled = false;
  }
}
function WinScenario() {
  console.log('Gagné !');
  //disable buttons to play
  buttonPlay.disabled = true;
  buttonDraw.disabled = true;
  buttonStop.disabled = true;
  //create elements to show win text and reset game
  var resetDiv = document.getElementById("reset");
  var winText = document.createElement('p');
  var buttonReset = document.createElement('button');
  if (scoreValue > scoreValueGm) {winText.textContent = "Vous avez gagné ! Votre main est supérieur à celle du Croupier.";}
  else if (scoreValueGm > maxScore) {winText.textContent = "Vous avez gagné ! La main du Croupier est supérieur au score maximum ("+maxScore+").";}
  else {winText.textContent = "Erreur";}
  buttonReset.textContent = "Rejouer";
  resetDiv.appendChild(winText);
  resetDiv.appendChild(buttonReset);

  //Reset game if click on reset button
  buttonReset.addEventListener('click', ResetGame);
  function ResetGame() {
    //reset to original value all variables
    DefaultValues();
    //delete loose or win text
    winText.remove();
    buttonReset.remove();
    //active button to play
    buttonPlay.disabled = false;
  }
}


//Event to launch game when player click on the button start
document.getElementById("play").addEventListener('click', PlayGame);
function PlayGame() {
    console.clear();
  //clear the cards, hands and score when start new game
  DefaultValues();
  //active buttons to play
  buttonStop.disabled = false;
  buttonDraw.disabled = false;

  //Give two random cards to the player and GM
  for (var i = 0; i<2; i++) {
    NewCardPlayer();
    NewCardGm();
  }
  //modify score value
  PlayerHandValue();
  GmHandValue();
  score.innerHTML = scoreValue;
  scoreGm.innerHTML = scoreValueGm;

  //console infos
  console.log('Cartes du joueur : ',PlayerCards);
  console.log('Cartes du GM :',GmCards);
  console.log('Score du joueur :',scoreValue);
  console.log('Score du GM :',scoreValueGm);
}

//Event to draw cards to add them to the hand of the player
document.getElementById("draw").addEventListener('click', DrawCard);
function DrawCard() {
    console.log('Draw Player')
  //give one random card to the hand and modify score value
  NewCardPlayer();
  PlayerHandValue();
  score.innerHTML = scoreValue;
  //console infos
  console.log('Cartes du joueur : ',PlayerCards);
  console.log('Score du joueur :',scoreValue);

  //Event if player score value is more high than maxScore value
  if (scoreValue > maxScore) {
    //Loose game
    LooseScenario();
  }
}

//Event when player stop drawing cards to let the Gm draw
document.getElementById("stop").addEventListener('click', DrawGmCard);
function DrawGmCard() {
    console.log('Draw GM')
  //disable buttons to play
  buttonPlay.disabled = true;
  buttonDraw.disabled = true;
  buttonStop.disabled = true;
  //Loose scenario if score of player is inferior to the Gm score value
  if (scoreValue < scoreValueGm) {
    LooseScenario();
  }
  //Gm draw cards until get more score value than the player
  else if (scoreValue >= scoreValueGm) {
    while (scoreValue > scoreValueGm) {
      NewCardGm();
      GmHandValue();
      scoreGm.innerHTML = scoreValueGm;
      //console infos
      console.log('Cartes du GM : ',GmCards);
      console.log('Score du GM :',scoreValueGm);
    }
    //Win scenario if score value of the Gm is higher than maxScore value
    if (scoreValueGm > maxScore) {
      WinScenario();
    }
    //Loose scenario if score value of the Gm is higher than player score value
    else if (scoreValueGm > scoreValue) {
      LooseScenario();
    }
    //Loose scenario if scores values are the same
    else if (scoreValueGm == scoreValue) {
      LooseScenario();
    }
    //Error message if womething goes wrong
    else {
      console.log('Une erreur a été produite dans la boucle ligne 212.');
    }
  }
  else {
    console.log('Une erreur a été produite dans les conditions ligne 236.');
  }
}