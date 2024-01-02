// Object literal

let address = {
  flatNo: 123,
  aptName: "XYZ",
};

Object.freeze(address);

let hobbies = ["Reading", "movies"];

let person = {
  age: 32,
  12: "Tweleve",
  name: "Bijay Singh",
  address,
  hobbies, // this is same as hobbies: hobbies
  // greet: function () {
  //   // method, when a function is written inside object
  //   console.log("Hello I am", this.name);
  //   return 12;
  // },
  greet() {
    // shortcut introduced in ES6
    console.log("Hello I am", this.name);
    return 12;
  },
};

person.gender = "Male";

// Object.defineProperty(person, 'gender', {
//  refer to MDN
// })

// console.log("Line 23: ", person.greet());

// Constructor Function, can be considered as Class
function PersonFactory(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("I am", this.name, "I am", this.age, "years old");
    console.log(`I am ${this.name}, I am ${this.age} years old`);
  };
}

let Ramesh = new PersonFactory("Ramesh", 24);
let Rama = new PersonFactory("Rama", 27);
let Sakshi = new PersonFactory("Sakshi", 25);

// console.log(Ramesh.greet());
// console.log(Rama.greet());
// console.log(Sakshi.greet());

// // Object construction using new keyword
// let emp = new Object();
// console.log(emp);
// (emp.eid = "E123"), (emp.name = "Jane Doe");
// console.log("Line 17: ", emp.eid);
// console.log("Line 18: ", emp["name"]);

// emp["gender"] = "Female";

// console.log(emp);

// console.log(Object.keys(person));

// console.log(Object.values(person));

// console.log(Object.entries(person));

let personII = {};

Object.assign(personII, person); // ES5

// console.log("Line 71: ", personII);

// ES6

let personIII = { ...person }; // ES6 spread operator
// console.log(personIII);

person.address.flatNo = "F-123";

console.log(person.address);
