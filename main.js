// Score
const scoreBoard = document.getElementById("score");
const playerWinCount = document.getElementById("player-score");
const computerWinCount = document.getElementById("computer-score");
const playerEmoji = document.getElementById("player-emoji");
const computerEmoji = document.getElementById("computer-emoji");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");

// Buttons
const gameOptionButtonContainer = document.querySelector(".game-options");
const gameOptionButtons = document.querySelectorAll(".game-options button");
const restartButton = document.getElementById("restart");

// Game info
const statusMessage = document.getElementById("status-message");
const roundCount = document.getElementById("round-count");

// Colors
const green = "#27c21f";
const red = "#ff4545";
const yellow = "#ffc933";
const secondary = "#505559";

// Emojis
const playerWinEmojis = ["😀", "😍", "🥹", "😃", "😁", "😆", "😊", "😎"];
const playerLooseEmojis = ["😤", "😬", "😩", "😫", "😣", "😕", "😒"];
const playerDrawEmojis = ["😐", "🤨", "😑", "🙄", "😮"];

const computerWinEmojis = ["🤡", "👹", "😈", "👽"];
const computerLooseEmojis = ["💀", "👿", "💩"];
const computerDrawEmojis = ["🤖"];

const gamePlayEmojis = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

// Array of possible game play options
let gameOptions = ["rock", "paper", "scissors"];

// Pick a random number from a given range 'num'
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Pick a random game play option
function computerPlay() {
  return gameOptions[randomNumber(gameOptions.length)];
}

// Capitalize the first letter in a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main game logic
let gameCount = 0;
const gameCountMax = 5;

function gamePlay(playerSelection, computerSelection) {
  let playerHasWon;
  let computerHasWon;
  let isDraw;

  // Round counter
  gameCount++;
  roundCount.textContent = `(${gameCount}/${gameCountMax})`;

  // Progress bar
  gameCount == 1 ? (progress.style.opacity = 100) : null;
  progressBar.style.width = (gameCount * 100) / gameCountMax + "%";

  // Draw
  if (playerSelection == computerSelection) {
    isDraw = true;
  }
  // Rock
  else if (
    playerSelection == gameOptions[0] &&
    computerSelection == gameOptions[1]
  ) {
    computerHasWon = true;
  } else if (
    playerSelection == gameOptions[0] &&
    computerSelection == gameOptions[2]
  ) {
    playerHasWon = true;
  }

  // Paper
  else if (
    playerSelection == gameOptions[1] &&
    computerSelection == gameOptions[0]
  ) {
    playerHasWon = true;
  } else if (
    playerSelection == gameOptions[1] &&
    computerSelection == gameOptions[2]
  ) {
    computerHasWon = true;
  }

  // Scissors
  else if (
    playerSelection == gameOptions[2] &&
    computerSelection == gameOptions[0]
  ) {
    computerHasWon = true;
  } else if (
    playerSelection == gameOptions[2] &&
    computerSelection == gameOptions[1]
  ) {
    playerHasWon = true;
  }

  // Player wins
  if (playerHasWon) {
    scoreBoard.style.borderColor = green;
    playerWinCount.textContent++;
    statusMessage.textContent = `You win! ${capitalize(
      playerSelection
    )} beats ${computerSelection}.`;
  }

  // Computer wins
  else if (computerHasWon) {
    scoreBoard.style.borderColor = red;
    computerWinCount.textContent++;
    statusMessage.textContent = `You loose! ${capitalize(
      computerSelection
    )} beats ${playerSelection}.`;
  }
  // Draw
  else if (isDraw) {
    scoreBoard.style.borderColor = yellow;
    statusMessage.textContent = `Draw! The computer went with ${computerSelection} too.`;
  }

  // Display player and computer selection on the score board
  playerEmoji.textContent = gamePlayEmojis[playerSelection];
  computerEmoji.textContent = gamePlayEmojis[computerSelection];

  // Display results after 5 rounds
  if (gameCount == gameCountMax) {
    // Player wins
    if (playerWinCount.textContent > computerWinCount.textContent) {
      scoreBoard.style.borderColor = green;
      statusMessage.textContent = "Player has won the match. Congrats!";
      playerEmoji.textContent =
        playerWinEmojis[randomNumber(playerWinEmojis.length)];
      computerEmoji.textContent =
        computerLooseEmojis[randomNumber(computerLooseEmojis.length)];
    }
    // Computer wins
    else if (playerWinCount.textContent < computerWinCount.textContent) {
      scoreBoard.style.borderColor = red;
      statusMessage.textContent = "Computer has won the match. Condolences!";
      playerEmoji.textContent =
        playerLooseEmojis[randomNumber(playerLooseEmojis.length)];
      computerEmoji.textContent =
        computerWinEmojis[randomNumber(computerWinEmojis.length)];
    }
    // Draw
    else if (playerWinCount.textContent == computerWinCount.textContent) {
      scoreBoard.style.borderColor = yellow;
      statusMessage.textContent = "No winner for this match. Please repeat!";
      playerEmoji.textContent =
        playerDrawEmojis[randomNumber(playerDrawEmojis.length)];
      computerEmoji.textContent =
        computerDrawEmojis[randomNumber(computerDrawEmojis.length)];
    }

    // Display restart button
    gameOptionButtonContainer.style.display = "none";
    restartButton.style.display = "block";

    // Hide counter and progress
    roundCount.textContent = "";
    progress.style.opacity = 0;
  }
}

// Play single round with a given option
gameOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gamePlay(button.id, computerPlay());
  });
});

// Reset game
restartButton.addEventListener("click", () => {
  scoreBoard.style.borderColor = secondary;
  gameCount = playerWinCount.textContent = computerWinCount.textContent = 0;
  gameOptionButtonContainer.style.display = "flex";
  restartButton.style.display = "none";
  playerEmoji.textContent = "🙂";
  computerEmoji.textContent = "🤖";
  statusMessage.textContent = "Press a button to start a new game.";
  progressBar.style.width = 0;
});
