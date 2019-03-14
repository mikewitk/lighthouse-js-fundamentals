let camelCase = function(input) {

/*return input.toUpperCase();*/
var newstr = [];

for (var i = 0; i < input.length; i++) {

  if (input[i] === " ") {
    var z = input[i + 1];
    var strU = z.toUpperCase();
    newstr.push(strU);
    i++;
  } else {
    var y = input[i];
    newstr.push(y);
  }
}
return newstr.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));