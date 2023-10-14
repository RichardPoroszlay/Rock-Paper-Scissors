function getComputerChoice() {
    let values = ["ROCK", "PAPER", "SCISSORS"];
    let randomize = Math.floor(Math.random() * values.length);
    
    return values[randomize];
}


function getPlayerChoice() {
    let playerChoice = prompt("Choose between Rock, Paper and Scissors!");
    switch(playerChoice.toUpperCase()) {
        case "ROCK":
            return "ROCK";
        case "PAPER":
            return "PAPER";
        case "SCISSORS":
            return "SCISSORS";
    }
}


function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
    if(playerSelection === computerSelection) {
        return "DRAW";
    } else if((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
    || (playerSelection === "PAPER" && computerSelection === "ROCK") 
    || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return "PLAYER WON";
    } else if((playerSelection === "SCISSORS" && computerSelection === "ROCK") 
    || (playerSelection === "ROCK" && computerSelection === "PAPER")
    || (playerSelection === "PAPER" && computerSelection === "SCISSORS")) {
        return "COMPUTER WON";
    } else {
        return "WRONG INPUT";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    let displayScore = () => {
        console.log("Player's Score: " + playerScore);
        console.log("Computer's Score: " + computerScore);
    };

    while(playerScore !== 5 && computerScore !== 5) {
        switch(playRound()) {
            case "DRAW":
                console.log("DRAW");
                displayScore();
                break;
            case "PLAYER WON":
                playerScore++;
                console.log("PLAYER WON");
                displayScore();
                break;
            case "COMPUTER WON":
                computerScore++;
                console.log("COMPUTER WON");
                displayScore();
                break;
            default:
                console.log("WRONG INPUT");
        }
    }
    console.log("GAME HAS ENDED")
}

game();
