var stringSeeker = function (mainStr, lateralStr) {
  var result = false;
    if (~mainStr.indexOf(lateralStr)) {
      result = true;
    }
  return result;
}
module.exports = stringSeeker;