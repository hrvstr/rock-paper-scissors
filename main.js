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

function gamePlay(playerSelection, computerSelection) {
  // Check if user actually gave some input
  if (playerSelection) {
    // Transform case to allow case-insensitive user input
    playerSelection = playerSelection.toLowerCase();
  } else {
    return "No user input found! Aborting...";
  }
  // Check if playerSelection is valid gameOption
  if (gameOptions.includes(playerSelection)) {
    // Rock
    if (
      playerSelection == gameOptions[0] &&
      computerSelection == gameOptions[0]
    ) {
      return "Put!";
    } else if (
      playerSelection == gameOptions[0] &&
      computerSelection == gameOptions[1]
    ) {
      return "You loose! Paper beats rock.";
    } else if (
      playerSelection == gameOptions[0] &&
      computerSelection == gameOptions[2]
    ) {
      return "You win! Rock beats scissors.";
    }

    // Paper
    else if (
      playerSelection == gameOptions[1] &&
      computerSelection == gameOptions[0]
    ) {
      return "You win! Paper beats rock.";
    } else if (
      playerSelection == gameOptions[1] &&
      computerSelection == gameOptions[1]
    ) {
      return "Put!";
    } else if (
      playerSelection == gameOptions[1] &&
      computerSelection == gameOptions[2]
    ) {
      return "You loose! Scissors beats paper.";
    }

    // Scissors
    else if (
      playerSelection == gameOptions[2] &&
      computerSelection == gameOptions[0]
    ) {
      return "You loose! Rock beats scissors.";
    } else if (
      playerSelection == gameOptions[2] &&
      computerSelection == gameOptions[1]
    ) {
      return "You win! Scissors beats paper.";
    } else if (
      playerSelection == gameOptions[2] &&
      computerSelection == gameOptions[2]
    ) {
      return "Put!";
    }

    return "No case matched";
  } else {
    return "Invalid game option";
  }
}

function game(rounds) {
  let playerWinCount = 0;
  let computerWinCount = 0;
  for (i = rounds; i > 0; i--) {
    let playerSelection = prompt("Pick a rock, paper or scissors!");
    let gameResults = gamePlay(playerSelection, computerPlay());

    // Let the computer play against itself for easier testing
    //let gameResults = gamePlay(computerPlay(), computerPlay());
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
    console.log("No winner for this round. Please repeat");
    if (confirm("Repeat match?")) {
      game(5);
    }
  } else {
    console.log("Something went wrong... ");
  }
}

game(5);

// console.log(gamePlay(computerPlay(), computerPlay()));
