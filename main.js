// Score
const playerWinCount = document.getElementById("player-score");
const computerWinCount = document.getElementById("computer-score");
const playerEmoji = document.getElementById("player-emoji");
const computerEmoji = document.getElementById("computer-emoji");

// Buttons
const gameOptionButtonContainer = document.querySelector(".game-options");
const gameOptionButtons = document.querySelectorAll(".game-options button");
const restartButton = document.getElementById("restart");

// Text
const gameInfo = document.getElementById("game-info");

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

// Main game logic of a single round
let gameCount = 0;
function gamePlay(playerSelection, computerSelection) {
  // Check if user actually gave some input
  if (playerSelection) {
    // Transform case to allow case-insensitive user input
    playerSelection = playerSelection.toLowerCase();
  } else {
    console.log("No user input found! Aborting...");
  }

  let playerHasWon;
  let computerHasWon;
  gameCount++;

  // Check if playerSelection is a valid gameOption
  if (gameOptions.includes(playerSelection)) {
    // Rock
    if (playerSelection == computerSelection) {
      isDraw = true;
    } else if (
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

    if (playerHasWon) {
      playerWinCount.textContent++;
      gameInfo.textContent = `You win! ${capitalize(
        playerSelection
      )} beats ${computerSelection}.`;
    } else if (computerHasWon) {
      computerWinCount.textContent++;
      gameInfo.textContent = `You loose! ${capitalize(
        computerSelection
      )} beats ${playerSelection}.`;
    } else if (isDraw) {
      gameInfo.textContent = `Draw! The computer went with ${computerSelection} too.`;
    }

    if (gameCount == 5) {
      if (playerWinCount.textContent > computerWinCount.textContent) {
        gameInfo.textContent = "Player has won the match. Congrats!";
        playerEmoji.textContent = "😀";
        computerEmoji.textContent = "💀";
      } else if (playerWinCount.textContent < computerWinCount.textContent) {
        playerEmoji.textContent = "🙁";
        computerEmoji.textContent = "🤡";
        gameInfo.textContent = "Computer has won the match. Condolences!";
      } else if (playerWinCount.textContent == computerWinCount.textContent) {
        playerEmoji.textContent = "😐";
        gameInfo.innerHTML = "No winner for this match. Please repeat!";
      }
      gameOptionButtonContainer.style.display = "none";
      restartButton.style.display = "block";
    }
  } else {
    console.log("Invalid game option: " + playerSelection);
  }
}

// Play single round with a given option
gameOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gamePlay(button.textContent.toLowerCase(), computerPlay());
  });
});

// Reset game
restartButton.addEventListener("click", () => {
  gameCount = playerWinCount.textContent = computerWinCount.textContent = 0;
  gameOptionButtonContainer.style.display = "flex";
  restartButton.style.display = "none";
  playerEmoji.textContent = "🙂";
  computerEmoji.textContent = "🤖";
});
