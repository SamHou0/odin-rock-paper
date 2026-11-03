let humanScore = 0;
let computerScore = 0;
function getRandomChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice === 0) {
        return "rock";
    } else if (numChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Enter your choice...");
    return choice;
}
function computerWin() {
    console.log("You lose!");
    computerScore++;
}
function humanWin() {
    console.log("You win!");
    humanScore++;
}
function Tie() {
    console.log("It's a tie.");
}
function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
        } else if (computerChoice === "scissor") {
            humanWin();
        } else {
            Tie();
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerWin();
        } else if (computerChoice === "rock") {
            humanWin();
        } else {
            Tie();
        }
    } else {
        if (computerChoice === "rock") {
            computerWin();
        } else if (computerChoice === "paper") {
            humanWin();
        } else {
            Tie();
        }
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getRandomChoice();

        playRound(computerSelection, humanSelection);
    }
}
playGame();
const winner = humanScore > computerScore ? "You" : "Computer";
console.log(winner + " wins!");
console.log("Your score: "+humanScore);
console.log("Computer score: "+computerScore);