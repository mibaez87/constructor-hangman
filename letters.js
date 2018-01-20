var Letter = function (answer){
    this.answer = answer.toUpperCase();
    this.userGuess;
    this.dashes = "-".repeat(this.answer.length);
    this.guessed = false;
    this.remGuess = 8;
}

Letter.prototype.checkLetter = function(userGuess){
    this.userGuess = this.answer.indexOf(userGuess.toUpperCase());
    if (this.userGuess > -1) {
        this.dashes[this.userGuess] = userGuess;
    } else {
        this.remGuess --;
    }
    return this.dashes;
}

module.exports = Letter;