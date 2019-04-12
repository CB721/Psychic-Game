//Provide instructions

alert('You have 9 guesses to guess what letter the computer picked.');

//Define choices

var alphaPick = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var keyFill = [];

//Create variables

var wins = 0;
var losses = 0;
var guesses;
var pressedKeys;
var continuousLetters = "";

//Computer picks random letter

var computerPick;

//User picks a letter

function updateScore() {
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
}

//Reset score totals

function reset() {
    computerPick = alphaPick[Math.floor(Math.random() * alphaPick.length)];
    guesses = 9;
    keyFill = [];
}



document.onkeypress = function (event) {
    var userGuess = event.key;

    //show guesses user has selected

    var pressedKeys = document.getElementById("pressedkeys");

    pressedKeys.textContent = "Your Guesses So Far: " + keyFill;

    keyFill.unshift(event.key);
    //Add to wins/losses/guesses based on what user picked

    if (guesses === 0) {
        reset();
        losses++;
    } else if (userGuess === computerPick) {
        wins++;
        reset();
    } else {
        guesses--;
        
        // pressedKeys.prepend(event.key);
    }
    updateScore();
}

//Update html
reset();
updateScore();
