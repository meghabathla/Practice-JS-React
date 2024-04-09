const roadmap = {
  name: "JavaScript",
};

function printName() {
  console.log(this.name);
}

printName.call(roadmap); // JavaScript
printName.apply(roadmap); // JavaScript

const printRoadmapName = printName.bind(roadmap);
printRoadmapName(); // JavaScript
