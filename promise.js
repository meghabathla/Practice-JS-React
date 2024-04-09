const promise = new Promise((resolve, reject) => {
  reject(new Error("something went wrong"));
});
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });

//we can pass two callback functions as arguments.
// The first one will be called when the promise is resolved and the second one will be called when the promise is rejected.
promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
