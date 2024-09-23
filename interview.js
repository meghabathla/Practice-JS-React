const arr = ["name"];
const obj = {};
obj.name = "FontendMaster"; //this create property  of object "name"
obj[arr] = "React";
// obj[arr] means obj.name = "React"
console.log(obj.name); // React
