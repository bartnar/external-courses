var lowerCamelCase = function (str) {
  var lowNotationStr = str.toLowerCase();
  var strArray = lowNotationStr.split(' ');
    for (var i = 1; i <= strArray.length-1; i++) {
      strArray[i] = (strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1));
    }
    lowNotationStr = strArray.join('');
  return lowNotationStr;
}
module.exports = lowerCamelCase;