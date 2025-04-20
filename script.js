function getComputerChoice() {
    let random = Math.random();

    if (random < 0.3) {
        return "rock";
    } else if (random < 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let human = prompt("Chose from 'rock', 'paper' or 'scissors'");
    return human;
}