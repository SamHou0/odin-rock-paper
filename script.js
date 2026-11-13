let humanScore = 0;
let computerScore = 0;
const playerChoiceSection = document.querySelector("#player-choice");
const resultSection = document.querySelector("#result");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");

function appendResult(message) {
    const para = document.createElement("p");
    para.textContent = message;
    resultSection.appendChild(para);
}
function updateScore() {
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
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
    appendResult("Computer: "+computerChoice+" You: "+humanChoice);
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerWin();
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
    updateScore();
    checkWin();
}
function checkWin() {
    if (humanScore < 5 && computerScore < 5) return;
    const winner = humanScore > computerScore ? "You" : "Computer";
    appendResult("Winner is " + winner + "!");
    appendResult("Your score: " + humanScore);
    appendResult("Computer score: " + computerScore);
    playerChoiceSection.remove();
}
for (const item of playerChoiceSection.children) {
    item.addEventListener('click', () => playRound(getRandomChoice(), item.textContent));
}