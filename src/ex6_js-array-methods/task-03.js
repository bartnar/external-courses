var everyAnalog = function (array, callback) {
    for (var i = 0; i <= array.length-1; i++) {
      if(!callback(array[i], i, array)) return false;
    }
  return true;
}
module.exports = everyAnalog;