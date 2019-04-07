{/* computer has every letter of the alphabet to guess from */ }
var alphaPick = ["a", "b", "c", "d", "e," "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// {/* user has every letter of alphabet to guess from */ }

var letter = event.key.toLowerCase();
// {/* user gets nine total guesses */ }

for (var p = 0; p < 10; p++) {
    if (userGuess === computerGuess) {
      wins++; document.write(#"wins-text");
    }
    // Reset to guesses and pick new letter
    else {
      losses++; document.write(#"losses-text");
    }

// determine which key was pressed


// {/* // each key pressed is displayed in "your guesses so far" */}

Document.write = userGuess
// {/* if correct key is pressed, add one to wins */ }


// {/* if correct key is not pressed within the nine guesses, add one to losses and reset the game */ }


// {/* // Creates an array that lists out all of the options (Rock, Paper, or Scissors). */ }


// {/* // Creating variables to hold the number of wins, losses, and ties. They start at 0. */ }
var wins = 0;
var losses = 0;

// {/* // Create variables that hold references to the places in the HTML where we want to display things. */ }
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

document.onkeyup = function (event) {


    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphaPick[Math.floor(Math.random() * alphaPick.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") ||
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
        } else {
            losses++;
        }

        //   Hide the directions
        directionsText.textContent = "";

        //   Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    
