//Provide instructions

alert('You have 9 guesses to guess what letter the computer picked.');

//Define choices

var alphaPick = ["a", "b", "c", "d", "e," "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables

var wins = 0;
var losses = 0;
var guesses = 0;

//Computer picks random letter

var computerPick = alphaPick[Math.floor(Math.random() * alphaPick.length)];

console.log(computerPick);

//User picks a letter

document.onkeypress = function(event) {
    var userGuess = event.key;

//Add to wins/losses/guesses based on what user picked

    if(userGuess === computerPick){
        wins++;
    } else {
        guesses++;
    }
    if(guesses = 9) {
        losses++;
    }
}

//Update html

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guesses').innerHTML = "Guesses: " + guesses;
