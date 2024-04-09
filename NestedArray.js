function countNumbers(collection) {
  let count = 0;
  if (!collection.length) {
    return;
  }

  for (let i = 0; i < collection.length; i++) {
    let currentValue = collection[i];

    if (typeof currentValue === "number") {
      count += 1;
    } else if (Array.isArray(currentValue)) {
      //If the currentValue is an array, it recursively calls the countNumbers function on that array
      count += countNumbers(currentValue); // and adds the returned count to the current count.
    }
  }
  return count;
}
const result = countNumbers([1, "2", [3, 4, [5]], function () {}, 8, 9]);
console.log(result);

// function countNumbers(collection) {
//   let num = 0;
//   const numbers = collection.map((val) =>
//     typeof val === Number ? num++ : num
//   );
//
//   const functions = collection.map(
//     (val = typeof val === Function ?  num++ : num)
//   );
//

//
//   console.log(`collectionlength`, collection.length);
//   for (let i = 0; i < collection.length; i++) {
//     count++;
//   }
//   return count;
// }

// const result = countNumbers([1, "2", [3, 4, [5]], function () {}, 8, 9]);
// console.log(result);
