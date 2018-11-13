var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;

var lettersGuessed = [];
    

//computer chooses a random letter and records to console
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);


//defining a function to reset the game
var reset = function() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);
    guesses = 10;
    lettersGuessed = [];
}

//event: user presses a key
document.onkeyup = function(event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    
    if (userGuess === computerChoice) {
        alert("You Win!");
        wins++;
        reset();
    }

    else if (userGuess !== computerChoice) {
        guesses--;
    }

    if (guesses === 0) {
        alert("Game Over! You Lose!");
        losses++;
        reset();
    }

    document.getElementById("directions-text").textContent = " ";
    document.getElementById("winsNumber").textContent = "Wins: " + wins;
    document.getElementById("lossesNumber").textContent = "Losses: " + losses;
    document.getElementById("guessesNumber").textContent = "Number of Guesses Left: " + guesses;
    document.getElementById("guessesLetter").textContent = "Letters Guessed: " +  lettersGuessed.join(', ');

    };
