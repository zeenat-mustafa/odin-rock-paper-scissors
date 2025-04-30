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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

// function playGame() {

//     for (let i = 1; i <= 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();

//         playRound(humanChoice, computerChoice);

//         console.log(`Your Score: ${humanScore}, Computer's Score: ${computerScore} `);
//     }

//     if (humanScore > computerScore) {
//         console.log("Congrats! You are the Winner.");
//     } else if (humanScore < computerScore) {
//         console.log("Opps! The Computer Wins.");
//     } else {
//         console.log("It's a Tie! Try again.");
//     }
// }

// playGame();