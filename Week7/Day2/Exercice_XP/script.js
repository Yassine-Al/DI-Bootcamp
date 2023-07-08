// Exercise 1 : Analyzing


//------1------
let fruits = ["apple", "orange"];
let vegetables = ["carrot", "potato"];

let result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);


//------2------
let country = "USA";
console.log([...country]);


//------Bonus------
let newArray = [...[,,]];
console.log(newArray);






// Exercise 2 : Employees



let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents); 


let fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents); 

let fullStackResidentsLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);
console.log(fullStackResidentsLastNames); 







// Exercise 3 : Star Wars

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epicString = epic.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, '');

console.log(epicString); 






// Exercise 4 : Employees #2

let students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

let passedStudents = students.filter(student => student.isPassed);

passedStudents.forEach(student => {
  console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});





