//Provide instructions

alert('You have 9 guesses to guess what letter the computer picked.');

//Define choices

var alphaPick = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables

var wins = 0;
var losses = 0;
var guesses;

//Computer picks random letter

var computerPick;

//User picks a letter

function updateScore() {
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('pressedkeys')
}

function reset() {
    computerPick = alphaPick[Math.floor(Math.random() * alphaPick.length)]; 
    guesses = 0;
}

document.onkeypress = function (event) {
    var userGuess = event.key;
    //show guesses user has selected
    
    //Add to wins/losses/guesses based on what user picked

    if (guesses === 9) {
        reset();
        losses++;
    } else if (userGuess === computerPick) {
        
        wins++;
    } else {
        
        guesses++;
    }
    updateScore();
}

//Update html
reset();
updateScore();
