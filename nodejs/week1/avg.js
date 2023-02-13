const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide at least one number.");
  process.exit(1);
}

const numbers = args.map((arg) => parseFloat(arg));
const sum = numbers.reduce((total, num) => total + num, 0);
const avg = sum / numbers.length;
console.log(`The average of [${numbers}] is ${avg}.`);
