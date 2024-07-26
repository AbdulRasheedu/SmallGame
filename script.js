function randomNumber() {
    let random_Number = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
    if (random_Number === 0) {
        return 'Bat';
    } else if (random_Number === 1) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function bat(computerChoice) {
    if (computerChoice === "Bat") {
        return "Game has Tie";
    } else if (computerChoice === "Ball") {
        return "You Have Won The Game";
    } else {
        return "Computer Has Won The Game";
    }
}

function ball(computerChoice) {
    if (computerChoice === "Ball") {
        return "Game has Tie";
    } else if (computerChoice === "Stump") {
        return "You Have Won The Game";
    } else {
        return "Computer Has Won The Game";
    }
}

function stump(computerChoice) {
    if (computerChoice === "Stump") {
        return "Game has Tie";
    } else if (computerChoice === "Bat") {
        return "You Have Won The Game";
    } else {
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

    alert(`You Have Chosen ${userChoice}. Computer Chose ${computerChoice}. ${result}`);
}
