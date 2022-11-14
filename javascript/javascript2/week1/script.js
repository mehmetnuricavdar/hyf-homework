// ####### 1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let minWord = danishWords[0];
for (let i = 0; i < danishWords.length; i++) {
  if (danishWords[i].length < minWord.length) {
    minWord = danishWords[i];
  }
}
console.log(minWord);
