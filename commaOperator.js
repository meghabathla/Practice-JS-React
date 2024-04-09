//The Comma Operator , evaluates each of its operands (from left to right) and returns the value of the last operand.

let x = 1;
x = (x++, x);

console.log(x); // 2
