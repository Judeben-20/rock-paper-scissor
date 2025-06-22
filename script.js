let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");

function play(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(userChoice, computerChoice);

  if (result === "win") {
    userScore++;
    resultMessage.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
  } else if (result === "lose") {
    computerScore++;
    resultMessage.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
  } else {
    resultMessage.textContent = `It's a Draw! You both chose ${userChoice}`;
  }

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
}

function getWinner(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
