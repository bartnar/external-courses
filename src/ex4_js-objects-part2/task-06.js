var eachCapitalLetter = function (str) {
  return str.split(' ').map(eachFirstLetter => eachFirstLetter[0].toUpperCase() + eachFirstLetter.substring(1)).join(' ');
}

module.exports = eachCapitalLetter;
/*Сначала, методом split делаем из строки str массив, разделяя элементы пробелами.
Затем методом map создаем новый массив, в котором, с помощью функции eachFirstLetter 
будем возвращать нулевой символ (первую букву) каждого слова по отдельности заглавным, затем, 
используя конкатенацию, к каждой заглавной букве вернём оставшуюся подстроку с первого символа (второй буквы). 
В конце склеим массив в строку, разделив слова пробелами*/