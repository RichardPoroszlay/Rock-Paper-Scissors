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
        console.log("DRAW");
    } else if((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
    || (playerSelection === "PAPER" && computerSelection === "ROCK") 
    || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        console.log("PLAYER WON");
    } else if((playerSelection === "SCISSORS" && computerSelection === "ROCK") 
    || (playerSelection === "ROCK" && computerSelection === "PAPER")
    || (playerSelection === "PAPER" && computerSelection === "SCISSORS")) {
        console.log("COMPUTER WON");
    } else {
        console.log("WRONG INPUT");
    }
}

playRound();
playRound();
playRound();
playRound();
playRound();
