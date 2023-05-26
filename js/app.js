//define the 4 familly of the 52 cards cardgame
var cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];
//define two empty table for cards of the player and the GM
var PlayerCards = [];
var GmCards = [];
//Define value for each cards
function CardsValue() {
  cgCards['2h'] = 2;
  cgCards['2d'] = 2;
  cgCards['2c'] = 2;
  cgCards['2s'] = 2;
  cgCards['3h'] = 3;
  cgCards['3d'] = 3;
  cgCards['3c'] = 3;
  cgCards['3s'] = 3;
  cgCards['4h'] = 4;
  cgCards['4d'] = 4;
  cgCards['4c'] = 4;
  cgCards['4s'] = 4;
  cgCards['5h'] = 5;
  cgCards['5d'] = 5;
  cgCards['5c'] = 5;
  cgCards['5s'] = 5;
  cgCards['6h'] = 6;
  cgCards['6d'] = 6;
  cgCards['6c'] = 6;
  cgCards['6s'] = 6;
  cgCards['7h'] = 7;
  cgCards['7d'] = 7;
  cgCards['7c'] = 7;
  cgCards['7s'] = 7;
  cgCards['8h'] = 8;
  cgCards['8d'] = 8;
  cgCards['8c'] = 8;
  cgCards['8s'] = 8;
  cgCards['9h'] = 9;
  cgCards['9d'] = 9;
  cgCards['9c'] = 9;
  cgCards['9s'] = 9;
  cgCards['10h'] = 10;
  cgCards['10d'] = 10;
  cgCards['10c'] = 10;
  cgCards['10s'] = 10;
  cgCards['Vh'] = 10;
  cgCards['Vd'] = 10;
  cgCards['Vc'] = 10;
  cgCards['Vs'] = 10;
  cgCards['Qh'] = 10;
  cgCards['Qd'] = 10;
  cgCards['Qc'] = 10;
  cgCards['Qs'] = 10;
  cgCards['Kh'] = 10;
  cgCards['Kd'] = 10;
  cgCards['Kc'] = 10;
  cgCards['Ks'] = 10;
  cgCards['1h'] = 11;
  cgCards['1d'] = 11;
  cgCards['1c'] = 11;
  cgCards['1s'] = 11;
}
CardsValue()

//Function to get a random card
function RandomCard() {
  return Math.floor(Math.random()*cgCards.length);
}

//Event to launch game when player click on the button start
document.getElementById("play").addEventListener('click', PlayGame);
function PlayGame() {
    console.clear();
  //clear the cards and hands when start new game
  PlayerCards = [];
  GmCards = [];
  cgCards = ['1h','1d','1c','1s','2h','2d','2c','2s','3h','3d','3c','3s','4h','4d','4c','4s','5h','5d','5c','5s','6h','6d','6c','6s','7h','7d','7c','7s','8h','8d','8c','8s','9h','9d','9c','9s','10h','10d','10c','10s','Vh','Vd','Vc','Vs','Qh','Qd','Qc','Qs','Kh','Kd','Kc','Ks'];

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

//Event to draw cards to add them to the hand of the player
document.getElementById("draw").addEventListener('click', DrawCard);
function DrawCard() {
  var randomCard = RandomCard();
  var PlayerCard = cgCards[randomCard];
  cgCards.splice(randomCard, 1); //remove the card taken in the table cgCards
  PlayerCards.push(PlayerCard); //push the random card obtained in the table of the player
    console.log('Cartes du joueur : ',PlayerCards);
}