//example-1
const accessName = {
  name: "megha",
  lastname: "bathla",
  printName: function () {
    console.log(`${this.name} ${this.lastname}`);
  },
};

const details = {
  name: "moltu",
  lastname: "mithie",
  state: "delhi",
};

//function borrowing
accessName.printName.call(details); //through call

//example-2

function printName(city, state) {
  console.log(`${this.name} ${this.lastname} lives in ${city} , ${state}`);
}

const data = {
  name: "shobhit",
  lastname: "megha",
};

const address = {
  address: "lane-49",
};
printName.call(data, "gandhicolony", "mumbai"); //through call
printName.apply(data, ["gaziabad", "uttarPradesh"]); //through apply

const result = printName.bind(data, "rampuram", "blr");
console.log(typeof result);
result();
