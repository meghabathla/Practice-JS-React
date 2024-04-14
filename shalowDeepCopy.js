//normal copy
// let obj = {
//   name: "perter",
//   city: "pune",
// };

// let user = obj;

// user.name = "bunder";
// console.log(obj);
// console.log(user);

// shallow copy
//Example-1
// let obj = {
//   name: "perter",
//   city: "pune",
// };

// let user = Object.assign({}, obj);

// user.name = "bunder";
// console.log(obj);
// console.log(user);

//Example-2 through spread operator
// let obj = {
//   name: "perter",
//   city: "pune",
// };

// let user = { ...obj };

// user.name = "bunder";
// console.log(obj);
// console.log(user);

//Here shallow copy fails:

// let obj = {
//   name: "perter",
//   city: "pune",
//   data: {
//     salary: "677899",
//   },
// };

// let user = { ...obj };

// user.data.salary = "2938";
// console.log(obj);
// console.log(user);

//Deep copy
// let obj = {
//   name: "perter",
//   city: "pune",
//   data: {
//     status: "single",
//   },
//   let: () => {
//     console.log(this.name);
//   },
// };

// let user = JSON.parse(JSON.stringify(obj));

// user.data.status = "bunder";
// console.log(obj);
// console.log(user);

//deep copy through spread operator

let obj = {
  name: "perter",
  city: "pune",
  data: {
    salary: "677899",
  },
};

let user = { ...obj };

user.data.salary = user = { ...user, data: { ...obj.data, salary: 3435576 } };
console.log(obj);
console.log(user);
