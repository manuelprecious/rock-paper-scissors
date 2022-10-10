let getComputerChoice = ()=>{
    let guessCount = 3;
    let guessNo = Math.floor(Math.random() * guessCount + 1)
    switch(guessNo){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

let computerCount = "";
let playerCount = "";
let playRound = (playerSelection, computerSelection)=>{
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        console.log(computerSelection);
        return "You smashed him";
    } else {
        console.log(computerSelection);
        return "You Lose! Paper beats Rock"
    }
}

let playerText = prompt("Rock, Paper or Scissors");

let game = playtimes=>{
    for (let i = 1; i < 5; i++){
        console.log(playtimes)
    }
}

console.log(game(playRound(playerText, getComputerChoice())));