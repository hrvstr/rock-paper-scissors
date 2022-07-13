// Pick a random number from a given range 'num'
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Array of possible gameplay options
let gameOptions = ["Rock", "Paper", "Scissors"];

// Pick a random gameplay option
function computerPlay() {
  return gameOptions[randomNumber(gameOptions.length)];
}
