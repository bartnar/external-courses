var parityChecking = function (array) {
  var elementsQuantity = [];
  var even = 0, odd = 0, zero = 0;
  for (var i = 0; i <= array.length-1; i++) {
    if (array[i] % 2 === 0 && array[i] !== 0 && array[i] !== null) {
      even += 1;
    } else if (array[i] % 2 === 1) {
        odd += 1;
      } else if (array[i] === 0) {
          zero += 1;
        }
  }
  elementsQuantity.push(even, odd, zero);
return elementsQuantity;
}
module.exports = parityChecking;