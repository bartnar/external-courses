var isPropertyName = function (str, obj) {
  for (var key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}

module.exports = isPropertyName;