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

console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());

