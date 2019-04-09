var addNewProperty = function (str, obj) {
 var copyObj = obj;
  for (var key in obj) {
    if (key !== str) {
      copyObj[str] = 'new';
    }
  }
  return copyObj;
}

module.exports = addNewProperty;