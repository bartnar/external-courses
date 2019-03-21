var primeNumber = function (anyNumber) {
  var counter = 1; //Number of divisions
  if (anyNumber > 1000 || anyNumber < 2) {
    return 'Данные неверны';
  }
  for (var i = 2; i <= anyNumber; i++) {
    if (anyNumber % i === 0 || anyNumber === 2) {
      counter++;
    }
    if (isNaN(counter)) {
      counter = ('Число ' + anyNumber + ' - составное число');
    } else if (counter === 2){
        counter = ('Число ' + anyNumber + ' - простое число');
      }
  }
  return counter;
}
module.exports = primeNumber;