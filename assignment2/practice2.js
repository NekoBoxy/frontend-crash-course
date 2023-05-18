// practice - Object
// Create an object called person with properties for name, age, and gender.
// Assign values to these properties and then display the name and age of the person.
const person = {
  name: "littleOtter",
  age: 3,
  gender: "female",
};

console.log(person); // { name: 'littleOtter', age: 3, gender: 'female' }
console.log(person.name); // { name: 'littleOtter', age: 3, gender: 'female' }
console.log(person.age); // { name: 'littleOtter', age: 3, gender: 'female' }

// Add a method to the person object created in the previous assignment called greet.
// The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message.
function greet() {
  let message = "Hello";
  console.log(message);
};

person.greet = greet;
person.greet(); // "Hello"
console.log(person); // { name: 'littleOtter', age: 3, gender: 'female', 是一個名為 greet 的 fn }

// Add a properties called friends to the person which contains several names and print it.
let friends = ["mary", "jane", "peter", "alex"];
person.friends = friends;
console.log(person.friends); // [ 'mary', 'jane', 'peter', 'alex' ]