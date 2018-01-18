var Letter = function (answer){
    // if we pass a string as answer into this constructor
    // then we can create an array of the letters in that string using split
    this.answer = answer.split("");
    this.dashes = "-";
    this.guessed = false;
    console.log(`letters.js ${this.answer}`)
}

Letter.prototype.getLetters = function() {
    return this.answer;
    console.log(`second letters.js ${this.answer}`);
}

module.exports = Letter;