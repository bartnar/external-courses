var Calculator = {
  result: 0,
  add: function add(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.result += argument;
    }
    return add;
  },
  subtract: function subtract(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.result -= argument;
    }
    return subtract;
  },
  divide: function divide(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.result /= argument;
    }
    return divide;
  },
  multiply: function multiply(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.result *= argument;
    }
    return multiply;
  },
  getResult: function getResult() {
    return Calculator.result;
  },
  reset: function reset() {
    Calculator.result = 0;
    return this.getResult();
  }
}
module.exports = Calculator;

