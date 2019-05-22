var filterAnalog = function (array, callback) {
  var newArray = [];
    for (var i = 0; i <= array.length-1; i++) {
      if (callback(array[i], i, array) === true){
      	newArray.push(array[i]);
      }
    }
return newArray;
}
module.exports = filterAnalog;