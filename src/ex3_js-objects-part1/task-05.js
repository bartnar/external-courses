function getCopyOfObject (obj) {
  var copyObj = {};
  for (var key in obj) {
  	if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copyObj[key]=obj[key];
    }
  }
return copyObj;
}

module.exports = getCopyOfObject;