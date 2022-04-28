let choices = ['rock', 'paper', 'scissors']; //Array of choices rock, paper, or scissors
let randomChoice = choices[Math.floor(Math.random() * choices.length)]; // Random number generator that selects random element from choices array
let playerScore = 0;
let cpuScore = 0;
let scoreLimit = 5; //Winning score to win game

// Arrow function that returns the computers selection. It's always random
let computerPlay = () => {
    // let randomNum = Math.floor(Math.random() * 3);
    let cpuChoice = randomChoice;
    return cpuChoice;
}

// Arrow function that returns the User selection and converts any string entered to lower case
let userPlay = () => {
    let userChoice = prompt('Rock, Paper, OR Scissors? ');
    return userChoice.toLowerCase();
}

// function that plays one round of Rock, Paper, Scissors by comparing the user and cpu entries with the elements in the array
let round = (playerSelection, computerSelection) => {
    // Same Choice
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie!');
    }
    // Paper Beats Rock: Checks User / CPU selection
    if (playerSelection === choices[1] || computerSelection === choices[1]) {
        if (playerSelection === choices[0]) {
            console.log('CPU wins! Paper beats Rock!');
            cpuScore++;
        } else if (computerSelection === choices[0]) {
            console.log('Player Wins! Paper Beats Rock!');
            playerScore++;
        }
    }
    // Rock Beats Scissors: Checks User / CPU selection
    if (playerSelection === choices[0] || computerSelection === choices[0]) {
        if (playerSelection === choices[2]) {
            console.log('CPU wins! Rock beats Scissors!');
            cpuScore++;
        } else if (computerSelection === choices[2]) {
            console.log('Player Wins! Rock beats Scissors!');
            playerScore++;
        }
    }
    // Scissors Beats Paper: Checks User / CPU selection
    if (playerSelection === choices[2] || computerSelection === choices[2]) {
        if (playerSelection === choices[1]) {
            console.log('CPU Wins! Scissors beats Paper!');
            cpuScore++;
        } else if (computerSelection === choices[1]) {
            console.log('Player Wins! Scissors beats Paper!');
            playerScore++;
        }
    }
}

let game = () => {
    // While loop that will continue until player / cpu reaches winning score
    while (playerScore < scoreLimit && cpuScore < scoreLimit) {
        round(userPlay(), computerPlay());
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${cpuScore}`);
    }
    // Determines who won the game
    if (playerScore === scoreLimit) {
        console.log('Player is the Winner!');
    } else if (cpuScore === scoreLimit) {
        console.log('CPU is the Winner');
    }

}

console.log(game());

