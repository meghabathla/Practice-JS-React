// function binarySearch(key, arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     //4 & 6
//     let mid = Math.floor((start + end) / 2);
//     if (key === arr[mid]) return mid;

//     if (key < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   console.log(`end`);
//   return -1;
// }
// const result = binarySearch(12, [12, 23, 34, 42, 56, 67, 89]);
// console.log(result);

//recursively method
function binarySearch(key, arr, start = 0, end = arr.length - 1) {
  if (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (key === arr[mid]) {
      return mid;
    }
    if (key < arr[mid]) {
      return binarySearch(key, arr, start, mid - 1);
    } else {
      return binarySearch(key, arr, mid + 1, end);
    }
  }
  return -1;
}
const result = binarySearch(89, [23, 34, 56, 12, 67, 42, 89]);
console.log(result);
