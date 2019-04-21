var mapAnalog = function (array, callback) {
  var newArray = [];
    for (var i = 0; i <= array.length-1; i++) {
      newArray.push(callback(array[i], i, array));
    }
return newArray;
}
module.exports = mapAnalog;