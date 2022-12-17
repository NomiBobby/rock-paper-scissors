function getComputerChoice(){
    randomNum = Math.random();
    if(randomNum < 1/3){
        return "rock";
    }
    else if(randomNum < 2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock"){
        if(computerSelection ==="rock"){
            return `Another round! ${playerSelection} ties with ${computerSelection}`
        }
        if(computerSelection ==="paper"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        if(computerSelection ==="scissors"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }

    else if(playerSelection === "paper"){
        if(computerSelection ==="paper"){
            return `Another round! ${playerSelection} ties with ${computerSelection}`
        }
        if(computerSelection ==="scissors"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        if(computerSelection ==="rock"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }

    else if(playerSelection === "scissors"){
        if(computerSelection ==="scissors"){
            return `Another round! ${playerSelection} ties with ${computerSelection}`
        }
        if(computerSelection ==="rock"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        if(computerSelection ==="paper"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    }
}

function game(){
    const playerSelection = "rock";
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        console.log(`Round ${i}, ${playRound(playerSelection, computerSelection)}`);
    }
}

game();