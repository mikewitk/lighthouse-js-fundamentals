function range (start, end, step) {
  var outputArray = [];
  if (step > 0){
    for (var i = start; i <= end; i = i + step) {
      outputArray.push(i); }
    return outputArray;
  } else { return []; }
}

console.log(range(0, 10, 2));
console.log(range(0, 10, 1));
console.log(range(0, 10, 0));