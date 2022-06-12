function computerPlay(){
    let random = Math.random() * 3;

    if(random < 1){
        return "Rock";
    }
    else if (random < 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerChoice, computerChoice){
    playerChoiceLower = playerChoice.toLowerCase();
    computerChoiceLower = computerChoice.toLowerCase();

    if(playerChoiceLower == "rock" && computerChoiceLower == "scissors" ||
    playerChoiceLower == "scissors" && computerChoiceLower == "paper" ||
    playerChoiceLower == "paper" && computerChoiceLower == "rock"){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }
    else if(computerChoiceLower == "rock" && playerChoiceLower == "scissors" ||
    computerChoiceLower == "scissors" && playerChoiceLower == "paper" ||
    computerChoiceLower == "paper" && playerChoiceLower == "rock"){
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    else{
        return "Tie game!";
    }
}

function playGame(playerChoice) {
    let result = playRound(playerChoice, computerPlay());

    if(result.includes("Win")){
        let playerScore = document.getElementById("player-score");
        let score = parseInt(playerScore.textContent);
        score++;
        playerScore.textContent = score;

        if(score == 5){
            alert("Congratulations, you win!");
            reset();
        }
    }
    else if(result.includes("Lose")){
        let computerScore = document.getElementById("computer-score");
        let score = parseInt(computerScore.textContent);
        score++;
        computerScore.textContent = score;

        if(score == 5){
            alert("Sorry, you lost!");
            reset();
        }
    }
    else{
        let draw = document.getElementById("draw");
        let score = parseInt(draw.textContent);
        score++;
        draw.textContent = score;
    }
}

function reset(){
    let scores = document.querySelectorAll(".score-text");
    scores.forEach(score => {
        score.textContent = 0;
    })
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.textContent);
    })
})

// function game(){
//     const MAX_ROUNDS = 5;
//     let playerWins = 0;
//     let computerWins = 0;

//     for(let i = 0; i < MAX_ROUNDS; i++){
//         let playerChoice = prompt("Rock, Paper, Scissors?");
//         let computerChoice = computerPlay();
//         let result = playRound(playerChoice, computerChoice);

//         console.log(result);

//         if(result.includes("Win")){
//             playerWins++;
//         }
//         else if(result.includes("Lose")){
//             computerWins++;
//         }
//     }

//     if(playerWins > computerWins){
//         console.log("You win the game!");
//     }
//     else if (playerWins < computerWins){
//         console.log("You lose the game!");
//     }
//     else{
//         console.log("Tie game!");
//     }
// }