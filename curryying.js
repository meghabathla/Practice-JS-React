// currying is done by 2 methods

// 1- by bind method
// const multiply = function (x, y) {
//   console.log(x * y);
// };
// const res = multiply.bind(this, 4);
// res(3);

//2-  by closures method

const multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
const result = multiply(4);
result(2);
