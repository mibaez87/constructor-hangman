var Letter = require("./letters.js");

var Word = function () {
    this.wordBank = ["strawberry", "mango", "kiwi", "banana", "peach", "coconut"];
    this.random = Math.floor(Math.random() * this.wordBank.length);
    this.answer = this.wordBank[this.random];

    var getWord = new Letter(this.answer);
};

module.exports = Word;
