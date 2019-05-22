var eraseSpaces = function (str) {
  var stringArray = str.split('');
  switch(stringArray[0] && stringArray[stringArray.length-1]) {
  	case ' ': 
  		stringArray.shift();
  		stringArray.pop();
  		var newStr = stringArray.join('');
  		break;
  	default: break;
  }
  return newStr;
}

module.exports = eraseSpaces;