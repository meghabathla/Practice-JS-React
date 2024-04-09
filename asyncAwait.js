//how to handle error in async await
const promise = new Promise((resolve, reject) => {
  reject(new Error("something went wrong"));
}); //This code creates a Promise promise that immediately rejects with an Error object containing the message "something went wrong

async function data() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error); //This code creates a Promise promise that immediately rejects with an Error object containing the message "something went wrong
  }
}
data();
