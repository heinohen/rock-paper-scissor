/*
SETUP

*/
let playerWins = 66;
let compWins = 99;


/*BUTTON FUNCTIONALITY */

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        console.log('-----press-----');
    });
});




//start
function onStart() {
    console.log("start")
    var x = document.getElementById("textScreen");
    x.innerHTML = "GAME RUNNING!<br>FIRST TO 5 WINS!";
    activateButtons();
     document.getElementById('start').style.display = "none";

}


const startButton = document.querySelector('#start');
startButton.addEventListener('click', onStart);


//rock
const rockButton = document.querySelector('#ro');
rockButton.addEventListener('click', () => choiceMade('rock'));
rockButton.disabled = true;

//paper
const paperButton = document.querySelector('#pa');
paperButton.addEventListener('click', () => choiceMade('paper'))
paperButton.disabled = true;


//scissors
const scisButton = document.querySelector('#sc');
scisButton.addEventListener('click', () => choiceMade('scissors'));
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





/* ACTUAL GAMEPLAY BELOW*/
function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() *3 ) ;
    return rps[number]
}


function playRound(computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == "rock" && playerSelection == "scissors") {
        return 1;
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        return 2;
    } else if (computerSelection == "rock" && playerSelection == "rock") {
        return 0;
    }

    if (computerSelection == "paper" && playerSelection == "rock") {
        return 1;
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        return 2;
    } else if (computerSelection == playerSelection) {
        return 0;
    }

    if (computerSelection == "scissors" && playerSelection == "paper") {
        return 1;
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        return 2;
    } else if (computerSelection == playerSelection) {
        return 0;
    }

    }



/* THIS IS THE DRIVER FOR THE GAME */

function game() {
    document.getElementById('player').innerHTML = playerWins;
    document.getElementById('comp').innerHTML = compWins;

    playerSelection = playerPlay(); 
    computerSelection = computerPlay();

    let winner = playRound(computerSelection, playerSelection)

    if (winner == 1) {
        console.log("Comp won this round!" + " " + playerSelection + " < " + computerSelection);
        compWins++;
    } else if (winner == 2) {
        console.log("Player won this round!" + " " + playerSelection + " > " + computerSelection);
        playerWins++;
    } else {
        console.log("TIE!" + " " + playerSelection + " == " + computerSelection);
    }

    console.log("Players score" + " " + playerWins);
    console.log("Comp score" + " " + compWins)
/*
    if (playerWins > compWins)  {
        console.log("Player won!" + " " + playerWins + " x " + compWins);
    } else if (compWins > playerWins) {
        console.log("Comp won!" + " " + playerWins + " x " + compWins);
    } else {
        console.log("UNBELIEVABLE, IT'S A TIE!" + " " + playerWins + " x " + compWins)
    }
    */
}









