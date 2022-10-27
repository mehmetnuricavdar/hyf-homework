// ######    Flight booking fullname function

function getFullname(firstname, surname) {
  const fullName = `${firstname} ${surname}`;
  return fullName;
}

let fullname1 = getFullname("Benjamin", "Hughes");
let fullname2 = getFullname("Mehmet", "Cavdar");

// ###### Formal fullname

function getFullname(firstname, surname, useFormalName, gender) {
  const fullName = `${firstname} ${surname}`;
  if (useFormalName === true) {
    if (gender === "male") {
      return `Lord ${fullName}`;
    } else {
      return `Lady ${fullName}`;
    }
  } else {
    return fullName;
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
  let today = new Date().getDate();
  const eventDate = (today + futureDays) % week.length;
  return week[eventDate];
}

console.log(getEventWeekday(2));

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
  //   for (let i = 0; i < class23Students.length; i++) {
  //     if (studentName === class23Students[i]) {
  //       return `Student ${studentName} is already in the class`;
  //     }
  //   }
  if (class23Students.includes(studentName)) {
    return `Student ${studentName} is already in the class`;
  }
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
