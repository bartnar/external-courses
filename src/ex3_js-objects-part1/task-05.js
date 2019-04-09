function getCopyOfObject (obj) {
  var copyObj = {};
  for (var key in obj) {
  	if (obj.hasOwnProperty(key)) {
        copyObj[key]=obj[key];
    }
  }
return copyObj;
}

module.exports = getCopyOfObject;