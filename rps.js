function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    //console.log(choice);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "tie";
        } else if (computerSelection === "paper") {
            return "You lost";
        } else {
            return "You won! :)";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "you won! :)";
        } else if (computerSelection === "paper") {
            return "tie";
        } else {
            return "you lost";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "you lost";
        } else if (computerSelection === "paper") {
            return "You won! :)";
        } else {
            return "tie";
        }
    } else {
        return "invalid player input. choose rock, paper, or scissors";
    }
}

function promptPlayer() {
    return prompt("Enter your rock-paper-scissors choice").toLowerCase();
}

function game() {
    /*for (let i = 0; i < 5; i++) {
        //console.log(playRound(getComputerChoice(),getComputerChoice()));
        console.log(playRound(promptPlayer(),getComputerChoice()));
    }*/
}
































