var Calculator = {
  answer: 0,
  add: function add(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.answer += argument;
    }
    return add;
  },
  subtract: function subtract(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.answer -= argument;
    }
    return subtract;
  } ,
  divide: function divide(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.answer /= argument;
    }
    return divide;
  } ,
  multiply: function multiply(argument) {
    if (typeof argument === 'number' && !isNaN(argument)) {
      Calculator.answer *= argument;
    }
    return multiply;
  } ,
  getResult: function getResult() {
    return Calculator.answer;
  },
  reset: function reset() {
    Calculator.answer = 0;
    return reset;
  }
}
