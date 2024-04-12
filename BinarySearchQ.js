function binarySearch(key, arr) {
  arr = arr.sort();
  let start = 0;
  let end = arr.length;
  let mid = Math.ceil((start + end) / 2);

  if (key === arr[mid]) return key;

  for (let i = 0; i < end; i++) {
    if (key < arr[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }
  
}
const result = binarySearch(42, [23, 34, 56, 12, 67, 42, 89]);
console.log(result);

//recursively method
// function binarySearch(key, arr) {
//   arr = arr.sort();
//   let start = 0;
//   let end = arr.length;
//   let mid = Math.ceil((start + end) / 2);
//   if (key == arr[mid]) return key;
//   else if (key < arr[mid]) {
//     end = mid;
//     binarySearch(key, arr);
//   } else if (key > arr[mid]) {
//     start = mid;
//     binarySearch(key, arr[]);
//   }
// }

// const result = binarySearch(42, [23, 34, 56, 12, 67, 42, 89]);
// console.log(result);
