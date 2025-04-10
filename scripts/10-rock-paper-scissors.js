// || used for default value
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = 
`Score: Wins:${score.wins} Ties:${score.ties} Losses:${score.losses}`;
}



updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playGame(playerMove) {
  let result = "";
  const computerChoice = pickComputerMove();

  if (playerMove === "scissors") {
    if (computerChoice === "scissors") {
      result = "Tie.";
    } else if (computerChoice === "rock") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  }

  if (playerMove === "paper") {
    if (computerChoice === "paper") {
      result = "Tie.";
    } else if (computerChoice === "scissors") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  }

  if (playerMove === "rock") {
    if (computerChoice === "rock") {
      result = "Tie.";
    } else if (computerChoice === "paper") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else {
    score.ties++;
  }

  document.querySelector('.js-result').innerHTML =
  result
  document.querySelector('.js-moves').innerHTML =
  `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon"> 
  <img src="images/${computerChoice}-emoji.png" class="move-icon">
  Computer`

  updateScoreElement();
  localStorage.setItem("score", JSON.stringify(score));
}
function resetScore() {
  score.wins = 0;
  score.ties = 0;
  score.losses = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}