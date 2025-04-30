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

let humanScore = 0;
let computerScore = 0;

let rndRslt = document.getElementById("roundResult");
let score = document.getElementById("score");
let winner = document.getElementById("winner");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let roundResult = '';

    if (humanChoice === computerChoice) {
        roundResult = "Its a tie!";
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"
    ) {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    rndRslt.innerText = roundResult;
    score.innerText = `Your Score: ${humanScore} - Computer Score: ${computerScore}`;
    
    if(humanScore >= 5 || computerScore >= 5){

        if(humanScore >= 5) {
            winner.innerText = "Congrats! You are the Winner.";
        } else {
            winner.innerText = "Opps! The Computer Wins.";
        }

        humanScore = 0;
        computerScore = 0;
    }

}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));