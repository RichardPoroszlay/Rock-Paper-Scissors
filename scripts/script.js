let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let values = ["ROCK", "PAPER", "SCISSORS"];
    let randomize = Math.floor(Math.random() * values.length);
    
    return values[randomize];
}


// displays who won the round
function displayResult(result) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = result;
}


function checkResult(result) {
    switch(result) {
        case "PLAYER WON":
            playerScore++;
            displayScores();
            break;
        case "COMPUTER WON":
            computerScore++;
            displayScores();
            break;
        case "DRAW":
            displayScores();
            break;
    }
}


function displayScores() {
    const playerScoreDiv = document.querySelector("#playerScore");
    const computerScoreDiv = document.querySelector("#computerScore");
    playerScoreDiv.textContent = "Player's score: " + playerScore;
    computerScoreDiv.textContent = "Computer's score: " + computerScore;
}


function checkScores() {
    const finalResultDiv = document.querySelector("#finalResult")
    if(playerScore === 5) {
        finalResultDiv.textContent = "YOU WON THE MATCH!";
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5) {
        finalResultDiv.textContent = "YOU LOST THE MATCH!";
        playerScore = 0;
        computerScore = 0;
    }
}


function playRock() {
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", () => {
        let result = playRound("ROCK");
        displayResult(result);
        checkResult(result);
        checkScores();
    });
}


function playPaper() {
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", () => {
        let result = playRound("PAPER");
        displayResult(result);
        checkResult(result);
        checkScores();
    });
}


function playScissors() {
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", () => {
        let result = playRound("SCISSORS");
        displayResult(result);
        checkResult(result);
        checkScores();
    });
}


function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if(playerSelection === undefined) {
        return "GAME STARTED";
    } else if(playerSelection === computerSelection) {
        return "DRAW";
    } else if((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") || 
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {;
        return "PLAYER WON";
    } else if((playerSelection === "SCISSORS" && computerSelection === "ROCK")  ||
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS")) {
        return "COMPUTER WON";
    } else {
        return "WRONG INPUT";
    }
}


function game() {
    playRock();
    playPaper();
    playScissors();
}


game();
