function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"];
    let randomize = Math.floor(Math.random() * values.length);
    
    return values[randomize];
}

console.log(getComputerChoice());

console.log("Hello, World!");