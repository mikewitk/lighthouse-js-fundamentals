let sumLargestNumbers = function(data) {
  arrayLength = data.length
  var larg1;
  var larg2;
  for (var i = 0; i < arrayLength; i++) {
    if (data[i] > larg1) {
      larg1 = data[i];
    } else  if (larg1 === undefined) { //for the case where the array have only negative numbers
      larg1 = data[i];
    }
  }
  for (var i = 0; i < arrayLength; i++) {
    if (data[i] > larg2 && data[i] < larg1) {
      larg2 = data[i];
    } else if (larg2 === undefined && data[i] != larg1) { //for the case where the array have only negative numbers
      larg2 = data[i];
    }
  }
  return larg1 + larg2;
};
console.log(sumLargestNumbers([-1, -10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));