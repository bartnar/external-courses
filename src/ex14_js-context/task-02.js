function Hangman(word) {
  var guessedString, errorsLeft, wrongSymbols;
  function newGame(newWord) {
    errorsLeft = 6;
    wrongSymbols = [];
    guessedString = "_".repeat(newWord.length);
  }
  newGame(word);

  this.guess = function(letter) {
    if (!errorsLeft) {
      console.log("YOU DIED");
      return this;
    }
    guessedString = guessedString.split("");
    var gotGuessed = false;
    if (word.indexOf(letter) !== -1) {
      word.split("").forEach(function(symbol, i) {
        if (letter === symbol) {
          gotGuessed = true;
          guessedString[i] = word[i];
        }
      });
    }
    guessedString = guessedString.join("");
    if (gotGuessed) {
      console.log(guessedString);
    } else {
      errorsLeft--;
      wrongSymbols.push(letter);
      console.log(`Wrong letter, errors left ${errorsLeft} | ${wrongSymbols}`);
    }
    return this;
  };
  this.getGuessedString = function() {
    return guessedString;
  };
  this.getErrorsLeft = function() {
    return errorsLeft;
  };
  this.getWrongSymbols = function() {
    return wrongSymbols;
  };
  this.getStatus = function() {
    return `Wrong letter, errors left ${errorsLeft} | ${wrongSymbols}`;
  };
  this.startAgain = function(newWord) {
    newGame(newWord);
  };
}
var hangman = new Hangman("webpurple");
module.exports = hangman;
