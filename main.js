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


let playRound = (playerSelection, computerSelection)=>{
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        console.log(computerSelection);
        return "You smashed him";
    } else {
        console.log(computerSelection);
        return "You Lose! Paper beats Rock"
    }
}

let playerText = "pApeR";
playRound(playerText, getComputerChoice());