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
        myWord.initGame();
        myWord.runGame();
    } else {
        console.log("Come back when you're ready to play!");
    }
});