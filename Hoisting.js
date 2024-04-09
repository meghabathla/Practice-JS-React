console.log(x === undefined); // true
var x = 3;
console.log(x); // 3

console.log(y === undefined); // Cannot access 'y' before initialization
let y = 3;
console.log(y); // 3

console.log(z === undefined); // Cannot access 'y' before initialization
const z = 3;
console.log(z); // 3

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where the functions and variables are declared,
// they are moved to the top of their scope regardless of whether their scope is global or local.

// Note that hoisting only moves the declaration, not the initialization.

// remember you can call function before it's ddefinition but can not call arrow function before its initialization

myName();
details();
console.log(a); //undefined
var a = 90;
console.log(myName);

function myName() {
  console.log("megha");
}

const details = () => {
  console.log(`nick name mithie`);
};
