// ####### Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

// Write some code here
function removeName(removalName) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Ahmad") {
      names.splice(i, 1);
    }
  }
}
removeName("Ahmad");
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
