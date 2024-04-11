//Write a function to return the count of numbers in an Array | MakeMyTrip Frontend Interview Question

function countNumbers(collections) {
  let count = 0;
  for (let i = 0; i < collections.length; i++) {
    if (typeof collections[i] === "number") {
      count++;
    } else if (Array.isArray(collections[i])) {
      count = count + countNumbers(collections[i]);
    }
  }
  return count;
}
const result = countNumbers([1, "2", [3, 4, [5]], function () {}, 8, 9]);
console.log(result);
