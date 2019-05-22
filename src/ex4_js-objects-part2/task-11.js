var symbolQuantity = function (str) {
  var strArray = str.split('');
  var keyValue = {};
    for (var i = 0; i <= strArray.length-1; i++) {
     /* записываем символ из массива и его значение в объект, затем сравниваем с самим собой (проверяем записан ли он) и если да (undefined), ничего не делаем, а если нет - значит символ встретился еще раз и прибавляем к значению ключа 1 */
      keyValue[strArray[i]] = keyValue[strArray[i]] === undefined ?
        1 :
        keyValue[strArray[i]] + 1;
    }
        for (var key in keyValue) {
          if (keyValue.hasOwnProperty(key)) {
            console.log(`Символ ${key} встречается в строке ${keyValue[key]} раз`);
          }
        }
}
module.exports = symbolQuantity;