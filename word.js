var Letter = require("./letters.js");

var Word = function (getWord) {
    this.wordBank = ["strawberry", "mango", "kiwi", "banana", "peach", "coconut"];
    this.random = Math.floor(Math.random() * wordBank.length);
    this.answer = wordBank[random];
    this.remGuess = 8;

    this.initGame = function () {
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: "Guess a letter: "
        }]).then(function (userGuess) {
            // if (){
            // console.log("CORRECT!");
            // } else (){
            // console.log("INCORRECT!");
            // remGuess --;
            // 
            // }
        });
    };

    // this.getWord = function () {
    //     var getWord = new Letter("m");
    //     console.log("getWord: ", getWord.getLetter());
    //     console.log("displayLetter: ", getWord.displayLetter());
    //     getWord.guessed = true;
    //     console.log("displayLetter guessed true: ", getWord.displayLetter());
    // }
};

module.exports = Word;