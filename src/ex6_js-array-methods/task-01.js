var sliceAnalog = function (array, begin, end) {
  var newArray = [];
  var endPosition;
  var beginPosition;
  if(!begin) beginPosition = 0;
  else beginPosition = begin;
  if(!end) endPosition = array.length;
  else endPosition = end;
  if(begin < 0) beginPosition += array.length;
  if(end < 0) endPosition += array.length;
  for (var i = beginPosition; i < endPosition; i++) {
    newArray.push(array[i]);
  }
return newArray;
}
module.exports = sliceAnalog;