function AccountantCalc() {
  Calculator.apply(this);
}

AccountantCalc.prototype = Object.create(Calculator.prototype);
AccountantCalc.prototype.constructor = AccountantCalc;

AccountantCalc.prototype.usdToRub = function() {
  if (this.isNumber(this.result)) {
    this.result *= 65;
  } else {
    console.log("Input quantity of dollars");
  }
  return this;
};
AccountantCalc.prototype.rubToUsd = function() {
  if (this.isNumber(this.result)) {
    (this.result /= 65).toFixed(2);
  } else {
    console.log("Input quantity of rubles");
  }
  return this;
};
AccountantCalc.prototype.round = function() {
  return (this.result = Math.round(this.result));
};
