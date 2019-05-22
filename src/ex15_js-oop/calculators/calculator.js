function Calculator() {
  this.result = 0;
}

Calculator.prototype.isNumber = function(value) {
  return !isNaN(value) && typeof value === "number" && isFinite(value);
};
Calculator.prototype.getResult = function() {
  return this.result;
};
Calculator.prototype.reset = function() {
  return (this.result = 0);
};
Calculator.prototype.add = function(argument) {
  if (this.isNumber(argument)) {
    this.result += argument;
  }
  return this;
};
Calculator.prototype.subtract = function(argument) {
  if (this.isNumber(argument)) {
    this.result -= argument;
  }
  return this;
};
Calculator.prototype.divide = function(argument) {
  if (this.isNumber(argument)) {
    this.result /= argument;
  }
  return this;
};
Calculator.prototype.multiply = function(argument) {
  if (this.isNumber(argument)) {
    this.result *= argument;
  }
  return this;
};
