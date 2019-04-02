var keyValue = function (obj) {
  for (var key in obj) {
  	if (Object.prototype.hasOwnProperty.call(obj, key)) {
    	console.log('Our key is: ' + key + '.' + ' Its value is: ' + obj[key])
	}
  }
}

module.exports = keyValue;