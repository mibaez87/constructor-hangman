var Letter = (answer) => {
    // if we pass a string as answer into this constructor
    // then we can create an array of the letters using split
    this.answer.split("") = answer;
    // now that we have an array of letters, we can create an array of dashes using
    // a for loop to determine the number of dashes based on
    // the length of the letters array
    this.dashes = "-";

    this.isCorrect = () => {
        if (answer){
            console.log("CORRECT!");
        } else {
            console.log("INCORRECT");
        }
    }
}

module.exports = Letter;