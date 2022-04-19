console.log("Welcome");

// Returns random selection rock, paper, or scissors
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
    }

}

// console.log(computerPlay());

/* Function that plays a single round. The function takes two parameters - the playerSelection and computerSelection - and return a sting that declares
the winner of the winner of the round like so: "You lose! Paper beats Rock" */  

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    // Paper Beats Rock
    if (playerSelection === 'paper' && computerSelection === 'rock') {
       return 'PLAYER WINS! Paper beats rock';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'CPU wins Paper beats rock';
    }
    // Rock Beats Scissors
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'PLAYER WINS! rock beats scissors';
     } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
         return 'CPU wins rock beats scissors';
     }

    // Scissors beats paper 
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'PLAYER WINS! scissors beats paper';
     } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
         return 'CPU wins scissors beats paper';
     }
}

const player = 'paper';
const cpu = computerPlay();
console.log(playRound(player, cpu));

