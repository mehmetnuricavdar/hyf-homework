/*freecodecamp.org account name: mehmetnuricavdar
https://www.freecodecamp.org/mehmetnuricavdar
*/

// Age-ify (A future age calculator)

const yearOfBirth = 1988;
let yearFuture = 2050;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020;
let dogYearFuture = 2030;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const humanYear = dogYear / 7;
let shouldShowResultInDogYears = true;

// it depends to "true" or "false"

if (shouldShowResultInDogYears === true) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`
  );
}

//Housey pricey (A house price estimator)
let wide = null;
let deep = null;
let high = null;
let gardenSizeInM2 = null;

//created a general function for calculations

function volumeInMeters(wide, deep, high) {
  const volumeInMeters = wide * deep * high;
  return volumeInMeters;
}

function housePrice(volumeInMeters, gardenSizeInM2) {
  const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  return housePrice;
}

//for Peter's house

let peterHouseDimensions = {
  wide: 8,
  deep: 10,
  high: 10,
  gardenSizeInM2: 100,
};

let peterHouse = housePrice(
  volumeInMeters(
    peterHouseDimensions.wide,
    peterHouseDimensions.deep,
    peterHouseDimensions.high
  ),
  peterHouseDimensions.gardenSizeInM2
);

if (peterHouse <= 2500000) {
  const difference = 2500000 - peterHouse;
  console.log(
    `Peter you are buying ${difference} more expensive than market price`
  );
} else {
  const difference2 = peterHouse - 2500000;
  console.log(`Peter you are buying ${difference2} cheaper than market price`);
}

//for Julia's House

let juliaHouseDimensions = {
  wide: 5,
  deep: 11,
  high: 8,
  gardenSizeInM2: 70,
};

let juliaHouse = housePrice(
  volumeInMeters(
    juliaHouseDimensions.wide,
    juliaHouseDimensions.deep,
    juliaHouseDimensions.high
  ),
  juliaHouseDimensions.gardenSizeInM2
);

if (juliaHouse <= 1000000) {
  const difference = 1000000 - juliaHouse;
  console.log(
    `Julia you are buying ${difference} more expensive than market price`
  );
} else {
  const difference2 = juliaHouse - 1000000;
  console.log(`Julia you are buying ${difference2} cheaper than market price`);
}

//Ez Namey (Startup name generator)

let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Hyper",
  "Rocket",
  "Atom",
  "Advanced",
  "Technology",
  "Active",
  "Fast",
];
let secondWords = [
  "Solutions",
  "Thinks",
  "Gadgets",
  "Wisdom",
  "Super",
  "Fresh",
  "Network",
  "Space",
  "Palace",
  "Platform",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);
