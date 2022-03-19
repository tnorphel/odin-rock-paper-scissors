function computerPlay() {
    const choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomNumber = Math.floor(Math.random() * choiceArray.length);
    let computersChoice = choiceArray[randomNumber];
    let computerChoice = document.querySelector('.computerChoice');
    computerChoice.style.fontWeight = 'bold';
    computerChoice.textContent = computersChoice;
    return computersChoice;
}

function showResultOfRound(outcome) {
    let result = document.querySelector('.outcome');
    result.textContent = outcome; 
}

let playerScore = 0;
let computerScore = 0;

function finalResult(playerScore, computerScore) {
    if (playerScore == 5) {
        let result = document.querySelector('#finalResult');
        result.style.fontWeight = 'bold';
        result.textContent = 'You Win! Congratulations!';
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    } else if (computerScore == 5) {
        let result = document.querySelector('#finalResult');
        result.style.fontWeight = 'bold';
        result.textContent = 'You Lose! Better Luck Next Time!';
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
}

function showScore(pScore, cScore) {
    let player = document.querySelector('.playerScore');
    let computer = document.querySelector('.computerScore');
    player.textContent = pScore;
    computer.textContent = cScore;
    finalResult(pScore, cScore);
}

function playRound(e) {

    const computerSelection = computerPlay();
    const playerSelection = e.target.id;

    if (playerSelection === computerSelection) {
        showResultOfRound('Tie!');
        showScore(playerScore, computerScore);
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        showResultOfRound("You won! Rock beats Scissors");
        showScore(++playerScore, computerScore);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        showResultOfRound("You won! Paper beats Rock");
        showScore(++playerScore, computerScore);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        showResultOfRound("You won! Scissors beats Paper");
        showScore(++playerScore, computerScore);
    } else {
        showResultOfRound(`You lose! ${computerSelection} beats ${playerSelection}`);
        showScore(playerScore, ++computerScore);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
}); 