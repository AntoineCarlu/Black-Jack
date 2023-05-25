//define the 4 familly of the 52 cards cardgame
let cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];
//define two empty table for cards of the player and the GM
var PlayerCards = [];
var GmCards = [];

//Function to get a random card
function RandomCard() {
  return Math.floor(Math.random()*cgCards.length);
}

//Event to launch game when player click on the button start
document.getElementById("play").addEventListener('click', PlayGame);
function PlayGame() {
  //get the two cards table empty for new game
  let PlayerCards = [];
  let GmCards = [];

  //Give two random cards to the player and GM
  for (var i = 0; i<2; i++) {
    var randomCard = RandomCard();
    var PlayerCard = cgCards[randomCard];
    cgCards.splice(randomCard, 1); //remove the card taken in the table cgCards
    PlayerCards.push(PlayerCard); //push the random card obtained in the table of the player
    var randomCard = RandomCard();
    var GmCard = cgCards[randomCard];
    cgCards.splice(randomCard, 1); //same as the top
    GmCards.push(GmCard); //same as the top
  }

  //console infos
  console.log('Cartes du joueur : ',PlayerCards);
  console.log('Cartes du GM :',GmCards);
}

