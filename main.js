var Word = require("./word.js");
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "confirm",
        name: "playGame",
        message: "Would you like to play Hangman?",
        default: true
    }
]).then(function (user){
    if (user.playGame === true){
        console.log("Great! First word: ");
        //function for displaying word
        //conditional statement determining if user is correct or incorrect
    } else {
        console.log("Come back when you're ready to play!");
    }
});

//display word. display guess a letter underneath. CORRECT/INCORRECT re-display word with guesses remaining if INCORRECT