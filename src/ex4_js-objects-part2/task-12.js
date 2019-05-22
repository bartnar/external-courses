var roundedAmount = function (number1, number2) {
  return (Math.round((+number1 + +number2)*1000)/1000);
}
module.exports = roundedAmount;