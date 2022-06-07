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
        return `You win! ${playerChoice} beats ${computerChoice}`;
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