//You have an array comprising of only 0 and 1. You need to group all the 0s to the left, then the 1s
//Input: [0, 1, 0, 1, 0, 1]
//Output: [0, 0, 0, 1, 1, 1]

const shiftArrayNum = (val) => {
  const res = val.sort();
  console.log(res);
};

shiftArrayNum([0, 1, 0, 1, 0, 1]);
