var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;

// var winsNumber = document.getElementById("winsNumber");
// var lossesNumber = document.getElementById("lossesNumber");
// var guessesNumber = document.getElementById("guessesNumber");
// var guessesLetter = document.getElementById("guessesLetter");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === computerChoice) {
        alert("You Win!");
        wins++;
        guesses = 10;
    }

    else if (userGuess !== computerChoice) {
        guesses--;
    }

    if (guesses === 0) {
        alert("Game Over! You Lose!");
        losses++;
        guesses = 10;
    }

    document.getElementById("directions-text").textContent = " ";
    document.getElementById("winsNumber").textContent = "Wins: " + wins;
    document.getElementById("lossesNumber").textContent = "Losses: " + losses;
    document.getElementById("guessesNumber").textContent = "Number of Guesses Left: " + guesses;
    document.getElementById("guessesLetter").textContent = "Letters Guessed: " + event.key;

    };

    //need to record letters guess
    //need to call the function so that the computer only guesses one letter for each game