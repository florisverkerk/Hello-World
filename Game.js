// program data:
var correctNumber = Math.floor(Math.random() * 100) + 1;
var userGuess;
var guessLimit = 5;
var won = false;
var guesses = [];


for (i = 1; i <= guessLimit; i++) {
    // prompt user for their guess
    do{
    userGuess = parseInt(prompt("Guess a number between 1-100"));
    }
    while (isPreviousGuess = true);
     
    // if correct: let the user know they won
    if(userGuess == correctNumber){
        window.alert("You've won! The correct number was " + correctNumber);
        won = true;
        break;
    }
    // if incorrect: add number to array and inform user
    else{
        guesses[i] = userGuess;
        window.alert("Guess is not correct, \n You have guessed: " + guesses.toString() + " please try again \n You have " + (guessLimit - i) + " tries remaining.");
    }
}

// if the user ran out of tries, let them know the game is over
if(!won){
    document.write("Sorry, you ran out of tries. You've only had: " + guessLimit + " tries" +
    "\n the correct number was: " + correctNumber + ". Please refresh and try again!");
}

function isPreviousGuess(){
    for(i = 0; i < guesses.length; i++){
        if(guesses[i] = userGuess){
            return true;
        }
    }
    return false;
}


