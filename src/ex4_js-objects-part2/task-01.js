var getValueInProto = function (name, obj) {
  return Object.getPrototypeOf(obj)[name];
}

module.exports = getValueInProto;