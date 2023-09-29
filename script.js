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

const userChoice = "paper";
const computerChoice = getComputerChoice();
console.log(determineWinner(userChoice, computerChoice));
