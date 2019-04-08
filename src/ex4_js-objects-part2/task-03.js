var eraseSpaces = function (str) {
  var stringArray = str.split('');
  stringArray.shift();
  stringArray.pop();
  var newStr = stringArray.join('');
return newStr;
}

module.exports = eraseSpaces;