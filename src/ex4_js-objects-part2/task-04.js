var capitalLetter = function (str) {
  var stringArray = str.split('');
  var capLetter = str[0].toUpperCase();
  stringArray.splice(0, 1, capLetter);
  var newStr = str;
  newStr = stringArray.join('')
  return newStr;
}
module.exports = capitalLetter;