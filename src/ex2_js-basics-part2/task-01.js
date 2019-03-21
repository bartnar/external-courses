var typeOfValue = function (argument) {
  if (typeof argument === 'number' && !isNaN(argument)) {
    return 'number';
  } else if (typeof argument === 'string') {
      return 'string';
    }
  return undefined;
}
module.exports = typeOfValue;

