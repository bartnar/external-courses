var arrayRunner = function (array) {
  for (var i = 0; i <= array.length-1; i++) {
    console.log(array[i]);
  }
  return console.log('Array length is ' + array.length);
}
module.exports = arrayRunner;