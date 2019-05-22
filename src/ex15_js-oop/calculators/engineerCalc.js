function EngineerCalc() {
  Calculator.apply(this);
}

EngineerCalc.prototype = Object.create(Calculator.prototype);
EngineerCalc.prototype.constructor = EngineerCalc;

EngineerCalc.prototype.sin = function() {
  return (this.result = Math.sin(this.result));
};

EngineerCalc.prototype.cos = function() {
  return (this.result = Math.cos(this.result));
};

EngineerCalc.prototype.tan = function() {
  return (this.result = Math.tan(this.result));
};

EngineerCalc.prototype.ctan = function() {
  return (this.result = Math.cos(this.result) / Math.sin(this.result));
};

EngineerCalc.prototype.pow = function(power) {
  return (this.result = Math.pow(this.result, power));
};

EngineerCalc.prototype.sqrt = function() {
  return (this.result = Math.sqrt(this.result));
};
