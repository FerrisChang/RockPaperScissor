//Randomly generates a number and then will output the results either(rock, paper, scissors)
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
//will play one round and take results passed in and compare in if-else statements.
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
    }else{
        if(computerSelection === 'scissor'){
            return 'tie';
        }else if(computerSelection === 'rock'){
            return 'lose';
        }else{
            return 'win';
        }
    }
}
//This will determine the winner of the game and append the score to the global containers
//Added score hitting 5 and displaying the winner
//* Will need to add a reset when the winner is found */
//* need to get the message to show when the number actually hits 5 not past it */
function game(playerChoice){
        const playerSelection = playerChoice;
        const computerSelection = getComputerChoice();
        if(playerScore == 5 || computerScore == 5){
            if(playerScore == 5){
                document.querySelector('#results-box').innerHTML = "You win!"
            } else{
                document.querySelector('#results-box').innerHTML = "You Lose!"
            }
        } else {
            if (playRound(playerSelection, computerSelection) === 'win'){
                playerScore += 1;
                document.querySelector('.player-result-score').innerHTML = playerScore;
            } else if (playRound(playerSelection, computerSelection) === 'lose') {
                computerScore += 1;
                document.querySelector('.computer-result-score').innerHTML = computerScore;
            } else {
                ties += 1;
                document.querySelector('.tie-result-score').innerHTML = ties;        
            }
        }
        
}
//Will wait for the person to hit the button then pass the result.
const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    game('rock');
});
const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    game('paper');
});
const scissor = document.getElementById('scissor');
scissor.addEventListener('click', () => {
    game('scissor');
});

let computerScore = 0;
let playerScore = 0;
let ties = 0;

/* EDITORS NOTES */
//reformat code to add color and decorations
//reorganize code to follow best practice
//test for errors
