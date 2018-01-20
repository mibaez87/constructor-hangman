var Letter = function (userGuess){
    this.userGuess = userGuess.toUpperCase();
    this.dash = "-";
    this.guessed = false;
}

Letter.prototype.getLetter = function() {
    return this.userGuess;
}

Letter.prototype.displayLetter = function(){
    if (this.guessed){
        return this.letter;
    } else {
        return this.dash;
    }
}

module.exports = Letter;