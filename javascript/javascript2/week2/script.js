// ###### 1.1. Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = [];

numbers.forEach((i) => {
  if (i % 2 !== 0) {
    newNumbers.push(i * 2);
  }
});

console.log("The doubled numbers are", newNumbers); // [2, 6]
