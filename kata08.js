const multiplicationTable = function(maxValue) {

var result = [];

var array1 = [];
for (var i = 1; i <= maxValue; i++) {

  var x = 1 * i;
  array1.push(x);

}

var str = result.join(' ');
return str;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));