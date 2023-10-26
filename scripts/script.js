let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const computerIcon = document.querySelector("#computerIcon").querySelector("img");
    let values = ["ROCK", "PAPER", "SCISSORS"];
    let randomize = Math.floor(Math.random() * values.length);
    
    switch(values[randomize]) {
        case "ROCK":
            computerIcon.src = "resources/rock.png";
            break;
        case "PAPER":
            computerIcon.src = "resources/paper.png";
            break;
        case "SCISSORS":
            computerIcon.src = "resources/scissors.png";
            break;
    }

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
    playerScoreDiv.textContent = "Player: " + playerScore;
    computerScoreDiv.textContent = "Computer: " + computerScore;
}


function checkScores() {
    const winner = document.querySelector("#winner");
    if(playerScore >= 5) {
         modal.style.display = 'block';
         winner.innerText = "You won the match!";
    } else if(computerScore >= 5) {
        modal.style.display = 'block';
        winner.innerText = "You lost the match!";
    }
}


function playRock() {
    const rockButton = document.querySelector("#rock");
    const playerIcon = document.querySelector("#playerIcon").querySelector("img");
    rockButton.addEventListener("click", () => {
        let result = playRound("ROCK");
        playerIcon.src = "resources/rock.png";
        displayResult(result);
        checkResult(result);
        checkScores();
    });
}


function playPaper() {
    const paperButton = document.querySelector("#paper");
    const playerIcon = document.querySelector("#playerIcon").querySelector("img");
    paperButton.addEventListener("click", () => {
        let result = playRound("PAPER");
        playerIcon.src = "resources/paper.png";
        displayResult(result);
        checkResult(result);
        checkScores();
    });
}


function playScissors() {
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", () => {
        let result = playRound("SCISSORS");
        const playerIcon = document.querySelector("#playerIcon").querySelector("img");
        playerIcon.src = "resources/scissors.png";
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
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return "PLAYER WON";
    } else if((playerSelection === "SCISSORS" && computerSelection === "ROCK")  ||
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS")) {
        return "COMPUTER WON";
    } else {
        return "WRONG INPUT";
    }
}


function operateOnModal() {
    const modal = document.getElementById('modal');
    const newGameBtn = document.getElementById('newGameBtn');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    newGameBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        resetGame();
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayScores();
    resultDiv.textContent = "Choose your weapon";
}


function game() {
    playRock();
    playPaper();
    playScissors();
    operateOnModal();
}


game();
