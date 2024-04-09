const arr = [2, 3, 4, 5, 6, 7];

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let initailIndex = 0;
  let acc = initialValue;
  if (initialValue === undefined) {
    acc = this[0];
    initailIndex = 1;
  }
  for (let index = initailIndex; index < this.length; index++) {
    acc = callbackFn(acc, this[index], index, this);
  }
  return acc;
};

const result = arr.myReduce((acc, curVal) => {
  if (curVal % 2 == 0) {
    return acc + curVal;
  }
  return acc;
}, 0);
console.log(result);
