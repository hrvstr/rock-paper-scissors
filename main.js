// Pick a random number from a given range 'num'
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Array of possible gameplay options
let gameOptions = ["rock", "paper", "scissors"];

// Pick a random gameplay option
function computerPlay() {
  return gameOptions[randomNumber(gameOptions.length)];
}

// Capitalize the first letter in a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main game logic of a single round
function gamePlay(playerSelection, computerSelection) {
  // Check if user actually gave some input
  if (playerSelection) {
    // Transform case to allow case-insensitive user input
    playerSelection = playerSelection.toLowerCase();
  } else {
    return "No user input found! Aborting...";
  }
  let playerHasWon;
  let computerHasWon;
  // Check if playerSelection is a valid gameOption
  if (gameOptions.includes(playerSelection)) {
    // Rock
    if (playerSelection == computerSelection) {
      return "Put!";
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
      return `You win! ${capitalize(
        playerSelection
      )} beats ${computerSelection}.`;
    } else if (computerHasWon) {
      return `You loose! ${capitalize(
        computerSelection
      )} beats ${playerSelection}.`;
    }
  } else {
    return "Invalid game option: " + playerSelection;
  }
}

// Run a match with a given amount of rounds
function game(rounds, auto = false) {
  let gameResults;
  let playerWinCount = 0;
  let computerWinCount = 0;
  for (i = rounds; i > 0; i--) {
    if (auto) {
      // Let the computer play against itself for easier testing
      gameResults = gamePlay(computerPlay(), computerPlay());
    } else {
      // Regular game with user input
      let playerSelection = prompt("Pick a rock, paper or scissors!");
      gameResults = gamePlay(playerSelection, computerPlay());
    }

    console.log(gameResults);

    if (gameResults.includes("win")) {
      playerWinCount++;
    } else if (gameResults.includes("loose")) {
      computerWinCount++;
    }
  }

  // Check who has won the most games in this match
  console.log("===");
  console.log(`Player: ${playerWinCount} - Computer: ${computerWinCount}`);
  if (playerWinCount > computerWinCount) {
    console.log("Player has won the match. Congrats!");
  } else if (playerWinCount < computerWinCount) {
    console.log("Computer has won the match. Condolences!");
  } else if (playerWinCount == computerWinCount) {
    console.log("No winner for this match. Please repeat!");
    if (auto) {
      game(rounds, auto);
    } else {
      if (confirm("Repeat match?")) {
        game(rounds, auto);
      }
    }
  }
}

// Initialize a game
game(5, true);
