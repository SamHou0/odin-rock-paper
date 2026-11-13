let humanScore = 0;
let computerScore = 0;
const playerChoiceSection = document.querySelector("#player-choice");
const resultSection = document.querySelector("#result");

function appendResult(message) {
    const para = document.createElement("p");
    para.textContent = message;
    resultSection.appendChild(para);
}
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
function computerWin() {
    appendResult("You lose...")
    computerScore++;
}
function humanWin() {
    appendResult("You win!");
    humanScore++;
}
function Tie() {
    appendResult("It's a tie.");
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
    checkWin();
}
function checkWin() {
    if (humanScore <= 5 && computerScore <= 5) return;
    const winner = humanScore > computerScore ? "You" : "Computer";
    appendResult("Winner is " + winner + "!");
    appendResult("Your score: " + humanScore);
    appendResult("Computer score: " + computerScore);
}
for (const item of playerChoiceSection.children) {
    item.addEventListener('click', () => playRound(getRandomChoice(), item.textContent));
}