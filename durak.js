const deckOfCards = [
  "2♠",
  "3♠",
  "4♠",
  "5♠",
  "6♠",
  "7♠",
  "8♠",
  "9♠",
  "10♠",
  "J♠",
  "Q♠",
  "K♠",
  "At♠",
  "2♣",
  "3♣",
  "4♣",
  "5♣",
  "6♣",
  "7♣",
  "8♣",
  "9♣",
  "10♣",
  "J♣",
  "Q♣",
  "K♣",
  "At♣",
  "2♦",
  "3♦",
  "4♦",
  "5♦",
  "6♦",
  "7♦",
  "8♦",
  "9♦",
  "10♦",
  "J♦",
  "Q♦",
  "K♦",
  "At♦",
  "2♥",
  "3♥",
  "4♥",
  "5♥",
  "6♥",
  "7♥",
  "8♥",
  "9♥",
  "10♥",
  "J♥",
  "Q♥",
  "K♥",
  "At♥",
];                //♠♣♥♦

let deckofcards2 = deckOfCards;

let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

let masterCard = getRandomInt(52);
let MASTERCARD = deckofcards2[masterCard];
deckofcards2.splice(masterCard, 1);

for (let i = 1, j = 51; i <= 8; i++ && j--) {
    let randomInt = getRandomInt(j) - 1;
    player1.push(deckofcards2[randomInt]);
    deckofcards2.splice(randomInt, 1);
}

for (let i = 1, j = 43; i <= 8; i++ && j--) {
    let randomInt = getRandomInt(j) - 1;
    player2.push(deckofcards2[randomInt]);
    deckofcards2.splice(randomInt, 1);
}
for (let i = 1, j = 35; i <= 8; i++ && j--) {
    let randomInt = getRandomInt(j) - 1;
    player3.push(deckofcards2[randomInt]);
    deckofcards2.splice(randomInt, 1);
}
for (let i = 1, j = 27; i <= 8; i++ && j--) {
    let randomInt = getRandomInt(j) - 1;
    player4.push(deckofcards2[randomInt]);
    deckofcards2.splice(randomInt, 1);
}

console.log('MASTERCARD :>> ', MASTERCARD);
console.log('player1 :>> ', player1);
console.log("player2 :>> ", player2);
console.log("player3 :>> ", player3);
console.log("player4 :>> ", player4);
console.log('deckofcards2 :>> ', deckofcards2);


