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

function game() {
    let playerWins = 0;
    let compWins = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("give rock, paper or scissors");
        let computerSelection = computerPlay();

        let winner = playRound(computerSelection, playerSelection)

        if (winner == 1) {
            console.log("Comp won this round!" + " " + playerSelection + " < " + computerSelection);
            compWins++;
        } else if (winner == 2) {
            console.log("Player won this round!" + " " + playerSelection + " > " + computerSelection);
            playerWins++;
        } else {
            console.log("TIE!" + " " + playerSelection + " == " + computerSelection);
            continue;
        }

        console.log("Players score" + " " + playerWins);
        console.log("Comp score" + " " + compWins)
    }
    if (playerWins > compWins)  {
        console.log("Player won!" + " " + playerWins + " x " + compWins);
    } else if (compWins > playerWins) {
        console.log("Comp won!" + " " + playerWins + " x " + compWins);
    } else {
        console.log("UNBELIEVABLE, IT'S A TIE!" + " " + playerWins + " x " + compWins)
    }
}

game();










