// const horse = {
//   age: "7",
// };

// function horseDetails(str, age, name) {
//   return `${str[0]}is ${age} ${str[1]}and name is ${name} `;
// }
// const output = horseDetails`this hosre ${horse.age} years old, ${"shobi"}`;
// console.log(output);

// const fisrt = await random();

// let first;
// await random().then((res) => {
// first= res;
// });

// //Api reponse == JSON {}
// //JSON parse == object m convert krdega
// stringify

const obj = [
  9,
  2,
  4,
  5,
  true,
  "hello",
  undefined,
  null,
  {},
  NaN,
  "",
  0.7867565,
  function () {},
];
console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj))); //cconvert stringify = JSON


//auth api 
// backend folder bnake port and express
//api= backend code