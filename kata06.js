let repeatNumbers = function(data) {

var newArray = [];

for (var z = 0; z < data.length; z++) {

  for (var i = 0; i < data[z][1]; i++) {
    newArray.push(data[z][0]);
  }

}
var str = newArray.join('');
return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));