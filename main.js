var Word = require("./word.js");
var inquirer = require("inquirer");

var myWord = new Word();

inquirer.prompt([{
    type: "confirm",
    name: "playGame",
    message: "Would you like to play Hangman?",
    default: true
}]).then(function (user) {
    if (user.playGame) {
        initGame();
        runGame();
    } else {
        console.log("Come back when you're ready to play!");
    }
});

function initGame() {
    console.log(getWord.dashes);
}

function runGame() {
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Guess a letter: "
    }]).then(function(guess){
        isCorrect(guess);
    });
}

function isCorrect(guess) {
    getWord.checkLetter(guess.userGuess);
    console.log(getWord.dashes);
    if (getWord.remGuess < 1) {
        console.log("You lose!!!! Game over!!!!");
    } else if (getWord.dashes.indexOf("-") < 0) {
        console.log("You guessed it! Next word: ");
    }
    runGame();
}