var Calculator = {
  result: 0,
  isNumber: function(value) {
    return !isNaN(value) && typeof value === "number" && isFinite(value);
  },
  setState: function(argument) {
    if (this.isNumber(argument)) {
      this.result = argument;
    }
    return this;
  },
  fetchData: function(callback) {
    setTimeout(function() {
      callback(500);
    }, 0);
  },
  add: function(argument) {
    if (this.isNumber(argument)) {
      this.result += argument;
    }
    return this;
  },
  subtract: function(argument) {
    if (this.isNumber(argument)) {
      this.result -= argument;
    }
    return this;
  },
  divide: function(argument) {
    if (this.isNumber(argument)) {
      this.result /= argument;
    }
    return this;
  },
  multiply: function(argument) {
    if (this.isNumber(argument)) {
      this.result *= argument;
    }
    return this;
  },
  getResult: function() {
    return this.result;
  },
  reset: function() {
    this.result = 0;
    return this;
  }
};
module.exports = Calculator;
