var samenessChecking = function (array) {
  for (var i = 0; i <= array.length-1; i++) {
    if (array[i] === array[i+1]) {
      return true;
    }
  }
  return false;
}

module.exports = samenessChecking;