var Word = require("./word.js");
var inquirer = require("inquirer");

var userGuess = process.argv[3];

var wordBank = ["strawberry", "mango", "kiwi", "banana", "peach", "coconut"];
var random = Math.floor(Math.random() * wordBank.length);
var answer = wordBank[random];

var myWord = new Word();

inquirer.prompt([
    {
        type: "confirm",
        name: "playGame",
        message: "Would you like to play Hangman?",
        default: true
    }
]).then(function(user){
    if (user.playGame){
        console.log("Great! First word: ");
        //function for displaying word
        myWord.getWord(answer);
    } else {
        console.log("Come back when you're ready to play!");
    }
});