var sentenceCreater = function (sentence, str, place) {
  var sentenceArray = sentence.split(' ');
  sentenceArray.splice(place + 1, 0, str);
  var finalSentence = sentenceArray.join(' ');
return finalSentence;
}
module.exports = sentenceCreater;