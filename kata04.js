const instructorWithLongestName = function(instructors) {
var length1 = 0;
var index1 = 0;

for (var i = 0; i < instructors.length; i++) {
  if (instructors[i]['name'].length >= length1) {
    length1 = instructors[i]['name'].length
    index1 = i;
  }
}
return instructors[index1];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));