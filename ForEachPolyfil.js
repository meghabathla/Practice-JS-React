Array.prototype.myForEach = function (callbackFn) {
  console.log(`this length ${this.length}`);
  for (let index = 0; index < this.length; index++) {
    callbackFn(this[index], index, this);
  }
};

const arr = [2, 3, 4, 5, 6];

arr.myForEach((element) => {
  console.log(`cb`, element);
});
// arr.forEach(
//   (element, index, array) => {
//     console.log(`cb`, element, index, array);
//   },
//   [4, 7, 8, 10]
// );
