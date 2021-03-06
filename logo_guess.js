// JavaScript Document

function yourGuess(input, answer) {
    // You can store references to the value and the
    // guesses textarea in local function variables.


    var guess = document.getElementById(input).value;
    var lowerguess = guess.toLowerCase();


    var guesses = document.getElementById("output");

    // First, if the guess is the same, just show the answer.
    // Append onto the textarea the result.
    if (lowerguess == answer) {
        alert("You're correct!");
        //guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+answer+")";
    } else {
        alert("You're incorrect!")
        guesses.value = guesses.value + "\r" + "You guessing incorrectly!("+answer+")";
    }
}

function showLogoToGuess() {
    // Show the randomly generated number if the onclick event
    // fires and the checkbox is check; otherwise, remove the
    // number and hide using display: none;.
    if (document.getElementById('cheat').checked) {
        document.getElementById('logoToGuess').value = logoToGuess;

    } else {
        document.getElementById('logoToGuess').value = '';
        document.getElementById('cheatShow').style.display = 'none';
    }
}

// Randomly generate a number
function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");

    // First, confirm this is what we want if the confirmIt
    // argument was passed.
    if (confirmIt && !confirm('Restart game with new logo?')) {
        return;
    }

    guesses.value = '';
    guesses.value = "New logo generated.\n";

    // Don't forget to hide the new number.
    document.getElementById('logoToGuess').value = '';
    document.getElementById('cheatShow').style.display = 'none';
}

function showGuesses(){
    var guesses = document.getElementById('guesses');
    var btn = document.getElementById('showguesses');

    if (guesses.style.display != 'block') {
        guesses.style.display = 'block';
        btn.value = 'Hide My Guesses';
    } else {
        guesses.style.display = 'none';
        btn.value = 'Show My Guesses';
    }
}

window.onload = function(){
    generatelogoToGuess();
}
