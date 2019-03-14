const urlEncode = function(text) {
var newarray = [];
for (var i = 0; i < text.length; i++) {

  if (text[i] == " ") {
    newarray.push("%20");
  } else {
    newarray.push(text[i]);
  }
}

var str = newarray.join('');
return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));