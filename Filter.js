// Array.prototype.myFilter = function (callbackFn, thisAgrs) {
//   const array = [];
//   for (let index = 0; index < this.length; index++) {
//     const shouldInclude = callbackFn(this[index], this.thisAgrs);
//     if (shouldInclude) array.push(this[index]);
//   }
//   return array;
// };
// const thisAgrs = {
//   threshold: 4,
// };

const arr = [2, 3, 4, 5, 6];

// const result = arr.myFilter((val) => val % 2 === 0);
// console.log(result);

const filteredNums = arr.filter((element) => {
  element >= this.threshold;
}, (thisAgrs = { threshold: 4 }));
console.log(filteredNums);
