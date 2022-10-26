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

