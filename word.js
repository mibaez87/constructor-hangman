var Letter = require("./letters.js");

var Word = function () {
    this.wordBank = ["strawberry", "mango", "kiwi", "banana", "peach", "coconut"];
    this.random = Math.floor(Math.random() * this.wordBank.length);
    this.answer = this.wordBank[this.random];

    var inquirer = require("inquirer");
    var getWord = new Letter(this.answer);
    
    this.initGame = function () {
        console.log(getWord.dashes);
    }
    this.isCorrect = function (guess) {
        getWord.checkLetter(guess.userGuess);
        console.log(getWord.dashes);
        if (getWord.remGuess < 1) {
            console.log("You lose!!!! Game over!!!!");
        } else if (getWord.dashes.indexOf("-") < 0) {
            console.log("You guessed it! Next word: ");
        } 
    }
    this.runGame = function () {
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: "Guess a letter: "
        }]).then(function(guess){
            isCorrect(guess);
        });
    }
};

module.exports = Word;