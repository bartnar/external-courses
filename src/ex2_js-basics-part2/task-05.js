var greatestValue = function (array) {
  var max = array[0];
  for (var i = 1; i <= array.length-1; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
return max;
}
module.exports = greatestValue;