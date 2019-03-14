let numberOfVowels = function(data) {
var sum = 0;
var length = data.length;
for (var i = 0; i < length; i++) {
  if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
    sum++;
  }
}
return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));