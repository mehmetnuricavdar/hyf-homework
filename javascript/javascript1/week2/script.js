/*freecodecamp.org account name: mehmetnuricavdar
https://www.freecodecamp.org/mehmetnuricavdar
*/

// ######    Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender) {
  const fullName = `${firstname} ${surname}`;
  if (fullName !== " ") {
    if (useFormalName) {
      if (gender === "male") {
        return `Lord ${fullName}`;
      } else {
        return `Lady ${fullName}`;
      }
    } else {
      return fullName;
    }
  } else {
    alert("Please enter your name");
  }
}
getFullname("Benjamin", "Hughes", true, "male"); // returns "Lord Benjamin Hughes"
getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
getFullname("Benjamin", "Hughes", true, "female"); // returns "Lady Benjamin Hughes"

// #####  Event application

function getEventWeekday(futureDays) {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date().getDay();
  const eventDate = (today + futureDays) % week.length;
  return week[eventDate];
}

getEventWeekday(2);

// ##### Weather wear

function whatToWear(temperature) {
  const warmDayClothesUp = [
    "white t-shirt",
    "blue t-shirt",
    "black t-shirt",
    "yellow t-shirt",
  ];
  const warmDayClothesDown = [
    "white short",
    "black short",
    "red short",
    "blue short",
  ];
  const coldDayClothesDown = [
    "white trousers",
    "black trousers",
    "red trousers",
    "blue trousers",
  ];
  const coldDayClothesUp = [
    "white sweater",
    "black sweater",
    "red sweater",
    "blue sweater",
  ];

  const randomNumber = Math.floor(Math.random() * 3);

  if (temperature < 15) {
    return `Today weather is cold. You can wear a ${coldDayClothesUp[randomNumber]} and a ${coldDayClothesDown[randomNumber]}`;
  } else {
    return `Today weather is nice. You can wear a ${warmDayClothesUp[randomNumber]} and a ${warmDayClothesDown[randomNumber]}`;
  }
}

// Student manager

const class23Students = [];
function addStudentToClass(studentName) {
  // You write code here
  for (let i = 0; i < class23Students.length; i++) {
    if (studentName === class23Students[i]) {
      return `Student ${studentName} is already in the class`;
    }
  }
  // used "arr.includes()" method for works as same with for loop above
  /*
            if (class23Students.includes(studentName)) {
                return `Student ${studentName} is already in the class`;
            }
            */

  if (class23Students.length >= 6) {
    if (studentName === "Queen") {
      return class23Students.push(studentName);
    } else {
      return `Cannot add more students to class 23`;
    }
  }

  if (studentName === "") {
    return `You cannot add an empty name!`;
  }

  return class23Students.push(studentName);
}

function getNumberOfStudents() {
  // You write code here
  return class23Students.length;
}

// ###### Candy helper
const candyPrice = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};
// adding candies to the array
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
  return boughtCandyPrices.push(candyPrice[candyType] * weight);
}

// calculating how much it costs
const amountToSpend = Math.floor(Math.random() * 100);
const boughtCandy = [];

let sum = 0;
function sumOfAddCandy() {
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    sum = sum + boughtCandyPrices[i];
  }
}
// checking whether can be bought more candies or not
function canBuyMoreCandy() {
  if (sum < amountToSpend) {
    return `You can buy more, so please do!`;
  } else {
    return `Enough candy for you!`;
  }
}

addCandy("sweet", 10);
addCandy("chocolate", 5);
addCandy("toffee", 10);

canBuyMoreCandy();
