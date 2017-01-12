//Sorting students by name, then age
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//Testing sort
var sortedName = students.sort(
  function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      var ageA = a.age;
      var ageB = b.age;
      return ageB - ageA;
    }
  }
);


console.log(sortedName);




//Sorting numbers in ascending order
var numArr = [1, 10, 2, 5, 9];

numArr.sort(
  function(a,b) {
    return a -b;
  }

);

console.log(numArr);