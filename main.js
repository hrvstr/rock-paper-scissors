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

// Text
const statusMessage = document.getElementById("status-message");
const roundCount = document.getElementById("round-count");

// Pick a random number from a given range 'num'
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Array of possible game play options
let gameOptions = ["rock", "paper", "scissors"];

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
const roundAmount = 5;

function gamePlay(playerSelection, computerSelection) {
  let playerHasWon;
  let computerHasWon;
  let isDraw;

  // Round counter
  gameCount++;
  roundCount.textContent = `(${gameCount}/${roundAmount})`;

  // Progress bar
  gameCount == 1 ? (progress.style.opacity = 100) : null;
  progressBar.style.width = (gameCount * 100) / roundAmount + "%";

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

  const greenBorder = "6px solid #27c21f";
  const redBorder = "6px solid #ff4545";
  const yellowBorder = "6px solid #ffc933";

  // Random emoji depending on game result
  const playerWinEmojis = ["😀", "😍", "🥹", "😃", "😁", "😆", "😊", "😎"];
  const playerLooseEmojis = ["😤", "😬", "😩", "😫", "😣", "😕", "😒"];
  const playerDrawEmojis = ["😐", "🤨"];

  const computerWinEmojis = ["🤡", "👹", "😈"];
  const computerLooseEmojis = ["💀", "👿", "💩"];
  const computerDrawEmojis = ["🤖", "👾"];

  function randomEmoji() {
    if (playerHasWon == true) {
      playerEmoji.textContent =
        playerWinEmojis[randomNumber(playerWinEmojis.length)];
      computerEmoji.textContent =
        computerLooseEmojis[randomNumber(computerLooseEmojis.length)];
    } else if (computerHasWon == true) {
      playerEmoji.textContent =
        playerLooseEmojis[randomNumber(playerLooseEmojis.length)];
      computerEmoji.textContent =
        computerWinEmojis[randomNumber(computerWinEmojis.length)];
    } else if (isDraw == true) {
      playerEmoji.textContent =
        playerDrawEmojis[randomNumber(playerDrawEmojis.length)];
      computerEmoji.textContent =
        computerDrawEmojis[randomNumber(computerDrawEmojis.length)];
    }
  }

  // Player wins
  if (playerHasWon) {
    playerWinCount.textContent++;
    statusMessage.textContent = `You win! ${capitalize(
      playerSelection
    )} beats ${computerSelection}.`;
    // scoreBoard.style.border = greenBorder;
  }
  // Computer wins
  else if (computerHasWon) {
    computerWinCount.textContent++;
    statusMessage.textContent = `You loose! ${capitalize(
      computerSelection
    )} beats ${playerSelection}.`;
    // scoreBoard.style.border = redBorder;
  }
  // Draw
  else if (isDraw) {
    statusMessage.textContent = `Draw! The computer went with ${computerSelection} too.`;
    // scoreBoard.style.border = yellowBorder;
  }

  // Random emoji after every round
  randomEmoji();

  // Display results after 5 rounds
  if (gameCount == roundAmount) {
    // Player wins
    if (playerWinCount.textContent > computerWinCount.textContent) {
      scoreBoard.style.border = greenBorder;
      statusMessage.textContent = "Player has won the match. Congrats!";
    }
    // Computer wins
    else if (playerWinCount.textContent < computerWinCount.textContent) {
      scoreBoard.style.border = redBorder;
      statusMessage.textContent = "Computer has won the match. Condolences!";
    }
    // Draw
    else if (playerWinCount.textContent == computerWinCount.textContent) {
      scoreBoard.style.border = yellowBorder;
      statusMessage.innerHTML = "No winner for this match. Please repeat!";
    }
    gameOptionButtonContainer.style.display = "none";
    restartButton.style.display = "block";
    roundCount.textContent = "";
    progress.style.opacity = 0;

    // Random emoji after final round
    randomEmoji();
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
  gameCount = playerWinCount.textContent = computerWinCount.textContent = 0;
  gameOptionButtonContainer.style.display = "flex";
  restartButton.style.display = "none";
  playerEmoji.textContent = "🙂";
  computerEmoji.textContent = "🤖";
  statusMessage.textContent = "Press a button to start a new game.";
  scoreBoard.style.border = "6px solid #505559";
  progressBar.style.width = 0;
});
