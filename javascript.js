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
            return 0;
        }
        if(computerSelection ==="paper"){
            return 1;
        }
        if(computerSelection ==="scissors"){
            return 2;
        }

    else if(playerSelection === "paper"){
        if(computerSelection ==="paper"){
            return 0;
        }
        if(computerSelection ==="scissors"){
            return 1;
        }
        if(computerSelection ==="rock"){
            return 2;
        }
    }

    else if(playerSelection === "scissors"){
        if(computerSelection ==="scissors"){
            return 0;
        }
        if(computerSelection ==="rock"){
            return 1;
        }
        if(computerSelection ==="paper"){
            return 2;
        }
    }
    }
}

function restartGame(e){
    counterHuman = 0;
    counterComputer = 0;
    counter = 0;
    document.getElementById("computerScore").innerHTML = counterComputer;
    document.getElementById("humanScore").innerHTML = counterHuman;
    console.log(e);
    let btnParent = e.target.parentNode;
    while (btnParent.firstChild){
        btnParent.removeChild(btnParent.lastChild);
    }
}

function game(e){
    if(counter == 4) {
        if(counterHuman > counterComputer) {
            document.getElementById("result").innerHTML = "Human wins!";
        }
        else{
            document.getElementById("result").innerHTML = "Computer wins!";
        }
        let btn = document.createElement("button");
        btn.innerHTML = "Restart Game";
        btn.addEventListener("click", restartGame);
        document.getElementById("result").appendChild(btn);
        counter++;
        return;
    }
    else if(counter >4){
        return;
    };
    const playerSelection = "rock";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === 0){
        return;
    }
    else if(result === 1){
        counterComputer++;
        // console.log(`counterComputer: ${counterComputer}`)
    }
    else if (result === 2){
        counterHuman++;
        // console.log(`counterHuman: ${counterHuman}`)
    }
    document.getElementById("computerScore").innerHTML = counterComputer;
    document.getElementById("humanScore").innerHTML = counterHuman;
    counter++;
}

// Main Code
let counterHuman = 0;
let counterComputer = 0;
let counter = 0;
let buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener("click", ()=>game()));