var Letter = require("./letters.js");

var Word = function() {    
    this.getWord = function(answer){
        var getWord = new Letter(answer);

        getWord.getLetters();
    }
    console.log(`word.js ${answer}`);
};

module.exports = Word;

//display word. display guess a letter underneath
//next display CORRECT/INCORRECT
//then re-display word with guesses remaining if INCORRECT