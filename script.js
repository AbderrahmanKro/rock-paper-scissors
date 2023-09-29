let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  const userChoiceLower = userChoice.toLowerCase();
  const computerChoiceLower = computerChoice.toLowerCase();

  if (userChoiceLower === computerChoiceLower) {
    return "The game is a tie!";
  } else if (
    (userChoiceLower === "rock" && computerChoiceLower === "scissors") ||
    (userChoiceLower === "paper" && computerChoiceLower === "rock") ||
    (userChoiceLower === "scissors" && computerChoiceLower === "paper")
  ) {
    return "You won!";
  } else {
    return "You lost!";
  }
};

const updateResults = (playerChoice, computerChoice, result) => {
  const playerChoiceElement = document.getElementById("playerChoice");
  const computerChoiceElement = document.getElementById("computerChoice");
  const winnerElement = document.getElementById("winner");

  playerChoiceElement.textContent = `Player chose: ${playerChoice}`;
  computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
  winnerElement.textContent = `Winner: ${result}`;

  if (result === "You won!") {
    playerScore++;
  } else if (result === "You lost!") {
    computerScore++;
  }
  const playerScoreElement = document.getElementById("playerScore");
  const computerScoreElement = document.getElementById("computerScore");
  playerScoreElement.textContent = `Player Score: ${playerScore}`;
  computerScoreElement.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5) {
    winnerElement.textContent = `Player won the game!`;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winnerElement.textContent = `Computer won the game!`;
    playerScore = 0;
    computerScore = 0;
  }
};

const playGame = (playerChoice) => {
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
  }

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateResults(playerChoice, computerChoice, result);
};

// const game = () => {
//   let userWins = 0;
//   let computerWins = 0;

//   for (let round = 1; round <= 5; round++) {
//     const userChoice = prompt(`Round ${round}: Choose Rock, Paper, or Scissors:`);
//     const computerChoice = getComputerChoice();
//     const roundResult = determineWinner(userChoice, computerChoice);
//     console.log(`Round ${round}: ${roundResult}`);

//     if (roundResult === "You won!") {
//       userWins++;
//     } else if (roundResult === "You lost!") {
//       computerWins++;
//     }
//   }
//   if (userWins > computerWins) {
//     console.log("You won the game!");
//   } else if (userWins < computerWins) {
//     console.log("You lost the game!");
//   } else {
//     console.log("The game is a tie!");
//   }
// };

// game();
