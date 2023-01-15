function getComputerChoice(){
    let choice = Math.floor(Math.random()*10);
    if(choice <= 3) {
        return 'rock';
    } else if(choice >=4 && choice <=7) {
        return 'paper';
    } else {
        return 'scissor';
    }
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            return 'tie';
        }else if(computerSelection === 'paper'){
            return 'lose';
        }else{
            return 'win';
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'paper'){
            return 'tie';
        }else if(computerSelection === 'scissor'){
            return 'lose';
        }else{
            return 'win';
        }
    }else if(playerSelection === 'scissor'){
        if(computerSelection === 'scissor'){
            return 'tie';
        }else if(computerSelection === 'rock'){
            return 'lose';
        }else{
            return 'win';
        }
    }else{
        return 'invalid choice';
    }
}



function game(){
    
    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;
    
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("choose rock, paper, or scissor");
        const computerSelection = getComputerChoice();
    
        if (playRound(playerSelection, computerSelection) === 'win'){
            playerScore += 1;
        } else if (playRound(playerSelection, computerSelection) === 'lose') {
            computerScore += 1;
        } else {
            ties += 1;
        }
        console.log("the computer choose " + computerSelection + " and you choose " + playerSelection + " so the result was " + playRound(playerSelection, computerSelection));
        console.log("computer score: " + computerScore);
        console.log("player score: " + playerScore);
        console.log("total ties: " + ties);
    }
}
game();