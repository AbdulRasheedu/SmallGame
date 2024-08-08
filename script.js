let score = {
  win: 0,
  lost: 0,
  tie: 0
};

function randomNumber() {
  let random_Number = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
  if (random_Number === 0) {
    return "Bat";
  } else if (random_Number === 1) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function bat(computerChoice) {
  if (computerChoice === "Bat") {
    score.tie++;
    return "Game has Tie";
  } else if (computerChoice === "Ball") {
    score.win++;
    return "You Have Won The Game";
  } else {
    score.lost++;
    return "Computer Has Won The Game";
  }
}

function ball(computerChoice) {
  if (computerChoice === "Ball") {
    score.tie++;
    return "Game has Tie";
  } else if (computerChoice === "Stump") {
    score.win++;
    return "You Have Won The Game";
  } else {
    score.lost++;
    return "Computer Has Won The Game";
  }
}

function stump(computerChoice) {
  if (computerChoice === "Stump") {
    score.tie++;
    return "Game has Tie";
  } else if (computerChoice === "Bat") {
    score.win++;
    return "You Have Won The Game";
  } else {
    score.lost++;
    return "Computer Has Won The Game";
  }
}

function playGame(userChoice) {
  let computerChoice = randomNumber();
  let result;

  if (userChoice === "Bat") {
    result = bat(computerChoice);
  } else if (userChoice === "Ball") {
    result = ball(computerChoice);
  } else if (userChoice === "Stump") {
    result = stump(computerChoice);
  }

  // Display the game result
  let display = document.getElementById("Display");
  display.innerHTML = `You Have Chosen ${userChoice}. 
  Computer Chose ${computerChoice}. 
  ${result}`;

  // Update and display the score
  displayScore();
}

function displayScore() {
  localStorage.setItem('score',JSON.stringify(score));
  let scoreDisplay = document.getElementById("ScoreDisplay");
  scoreDisplay.innerHTML = `Wins: ${score.win}, Losses: ${score.lost}, Ties: ${score.tie}`;
}

function resetScore() {
  // Reset the score object
  score = {
      win: 0,
      lost: 0,
      tie: 0
  };

  // Clear the localStorage
  localStorage.removeItem('score');

  // Update the display
  displayScore();
}

