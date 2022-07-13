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
  // Transform case to allow case-insensitive user input
  playerSelection = playerSelection.toLowerCase();

  // Check if playerSelection is valid gameOption
  if (gameOptions.includes(playerSelection)) {
    // Log out picked options for debugging
    console.log(`player: ${playerSelection}`);
    console.log(`cpu: ${computerSelection}`);

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
  for (i = rounds; i > 0; i--) {
    let playerSelection = prompt("Pick a rock, paper or scissors!");
    console.log(gamePlay(playerSelection, computerPlay()));
    console.log("===");
  }
}

game(5);

// console.log(gamePlay(computerPlay(), computerPlay()));
