var lengthOfStr = function (str, num) {
  var deletionQuantity = str.length - num + 1;
  if (str.length > num) {
    var strArray = str.split('');
    strArray.splice(num - 1, deletionQuantity, '…');
    var newStr = str;
    newStr = strArray.join('');
  }
return newStr;
}
module.exports = lengthOfStr;