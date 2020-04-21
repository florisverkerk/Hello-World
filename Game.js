// program data:
var correctNumber = 7;
var usersGuess;
var guessLimit = 5;

// prompt user for their guess
for (i = 1; i <= guessLimit; i++) {
    usersGuess = window.prompt("Guess a number between 1-10"); 
}

// if correct: let the user know they won
if(usersGuess == correctNumber){
    window.alert("You've won! The correct number was " + correctNumber);
    break;
}
// if incorrect: let the user know
else{
    window.alert("Guess is not correct, please try again \n You have " + (guessLimit - i) + " tries remaining.");
}
