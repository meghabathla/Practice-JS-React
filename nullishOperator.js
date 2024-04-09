//Nullish coalescing operator
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand
//when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const data = null ?? "dataIsEmpty";
console.log(data); //dataIsEmpty

const result = 0 ?? "70%";
console.log(result); //0
