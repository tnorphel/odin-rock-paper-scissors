//Function that randomly returns either 'Rock', 'Paper', or 'Scissors
function computerPlay() {
    const choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    //getting a random number between 0 and 2 (inclusive)
    let randomNumber = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomNumber];
}
//console.log(computerPlay())

//One Round of the Game
function playRound(playerSelection, computerSelection) {

    // console.log('You chose: ', playerSelection);
    // console.log('Computer chose: ', computerSelection);

    //undefined condition
    if (playerSelection == undefined) {
        return "This round is cancelled due to invalid choice!"
    }
    //Tie condition
    if (playerSelection === computerSelection) {
        return "Tie";
    }

    if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        return "You won! Rock beats Scissors";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You won! Paper beats Rock";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You won! Scissors beats Paper";
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

//Get input from user and return it 
function playerChoice() {
    let choice = prompt("Enter your choice ('Rock', 'Paper', 'Scissors'): ");
    choice = choice.toLowerCase(); //for uniformity in case user input something like sCiSsoR
    final = choice[0].toUpperCase() + choice.slice(1);
    //console.log('final: ', final);

    //In case user inputs an incorrect spelling, for example 
    if (final === 'Rock' || final === 'Paper' || final === 'Scissors') {
        return final; 
    } else {
        alert("Please enter a choice with correct spelling! By default this game will be cancelled!");
        return undefined;
    }
}


//play five rounds
//No score awarded in case of Tie or if round is cancelled due to invalid choice!
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 'This round is cancelled due to invalid choice!') {
            console.log(result);
        }else if (result === 'Tie') {
            console.log(result);
            // playerScore++;
            // computerScore++;
        } else if (result === `You won! ${playerSelection} beats ${computerSelection}`) {
            console.log(result);
            playerScore++;
        } else {
            console.log(result);
            computerScore++;
        }
    }

    //Determining winner
    if (playerScore > computerScore) {
        console.log(`Final result: You Won! Congratulations! Your score is ${playerScore} and computer's score is ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Final result: You Lose! Better Luck Next Time! Your score is ${playerScore} and computer's score is ${computerScore}`);
    } else {
        console.log(`Final result: Game Tied!  Your score is ${playerScore} and computer's score is ${computerScore}`);
    }
}

game();