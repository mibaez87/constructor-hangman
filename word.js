var Letter = require("./letters.js");
var userGuess = process.argv[3];

var wordBank = ["strawberry", "mango", "kiwi", "banana", "peach", "coconut"];
var random = Math.floor(Math.random() * wordBank.length);
var answer = wordBank[random];

var Word = () => {
    this.answer = answer;
    
    this.getWord = function(answer){
        var getWord = new Letter(answer);

        getWord.isCorrect();
    }
};

console.log(answer);

module.exports = Word;