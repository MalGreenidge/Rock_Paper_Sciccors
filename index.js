console.log("Welcome");

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