/*
SETUP

*/
let playerWins = 0;
let compWins = 0;
let playerSelection;
let computerSelection;

//start
function onStart() {
    console.log("start")
    var x = document.getElementById("textScreen");
    x.innerHTML = "GAME RUNNING!<br>FIRST TO 5 WINS!";
    document.getElementById('commentary').innerHTML = "GOOD LUCK!";
    activateButtons();
    resetButton.disabled = false;
}

//reset
function onReset() {
    playerWins = 0;
    compWins = 0;
    document.getElementById('player').innerHTML = playerWins;
    document.getElementById('comp').innerHTML = compWins;
    document.getElementById('commentary').innerHTML = "RESET!<br>PRESS START TO PLAY AGAIN!";
    disableButtons();
    resetButton.disabled = true;
}

// star game button
const startButton = document.querySelector('#start');
startButton.addEventListener('click', onStart);

// reset game button
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', onReset)


//rock
const rockButton = document.querySelector('#ro');
rockButton.addEventListener('click', () => playRound('rock'));
rockButton.disabled = true;

//paper
const paperButton = document.querySelector('#pa');
paperButton.addEventListener('click', () => playRound('paper'))
paperButton.disabled = true;


//scissors
const scisButton = document.querySelector('#sc');
scisButton.addEventListener('click', () => playRound('scissors'));
scisButton.disabled = true;


function activateButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scisButton.disabled = false;
    startButton.disabled = true;
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scisButton.disabled = true;
    startButton.disabled = false

}

function choiceMade(item) {
    playerSelection = item;
    console.log(playerSelection)
    disableButtons();

    
}

// computers turn
function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() *3 ) ;
    return rps[number]
}

// play one round
function playRound(playerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    let winner;

    if (computerSelection == "rock" && playerSelection == "scissors") {
        winner = 1;
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        winner = 2;
    } else if (computerSelection == "rock" && playerSelection == "rock") {
        winner = 0;
    }

    if (computerSelection == "paper" && playerSelection == "rock") {
        winner = 1;
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        winner = 2;
    } else if (computerSelection == playerSelection) {
        winner = 0;
    }

    if (computerSelection == "scissors" && playerSelection == "paper") {
        winner = 1;
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        winner = 2;
    } else if (computerSelection == playerSelection) {
        winner = 0;
    }

    if (winner == 1) {
        document.getElementById('commentary').innerHTML = playerSelection + " vs. " + computerSelection + "</br>Computer won this round!"
        compWins++;
    } else if (winner == 2) {
        document.getElementById('commentary').innerHTML = playerSelection + " vs. " + computerSelection + "</br>Player won this round!";
        playerWins++;
    } else {
        document.getElementById('commentary').innerHTML = playerSelection + " vs. " + computerSelection + "</br>TIE!";
    }
    document.getElementById('player').innerHTML = playerWins;
    document.getElementById('comp').innerHTML = compWins;
    checkForWinner()
    }

// check if win conditions are filled
function checkForWinner() {

    if (playerWins == 5) {
        document.getElementById('commentary').innerHTML = " YOU WON !"
        document.getElementById('textScreen').innerHTML = "GAME ENDED!"
        disableButtons();
        startButton.disabled = true;
        
        return;
    } else if (compWins == 5) {
        document.getElementById('commentary').innerHTML = " YOU LOST !"
        document.getElementById('textScreen').innerHTML = "GAME ENDED!"
        disableButtons();
        startButton.disabled = true;
        
        
        return;
        
    }


}