// ######    Flight booking fullname function

function getFullname(firstname, surname) {
  let fullName = `${firstname} ${surname}`;
  return fullName;
}

let fullname1 = getFullname("Benjamin", "Hughes");
let fullname2 = getFullname("Mehmet", "Cavdar");

// ###### Formal fullname

function getFullname(firstname, surname, useFormalName, gender) {
  let fullName = `${firstname} ${surname}`;
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
getFullname("Benjamin", "Hughes", true, "male"); // returns "Lord Benjamin Hughes"`
getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
getFullname("Benjamin", "Hughes", true, "female");
