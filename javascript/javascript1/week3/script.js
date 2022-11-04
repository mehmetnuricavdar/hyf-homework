/*freecodecamp.org account name: mehmetnuricavdar
https://www.freecodecamp.org/mehmetnuricavdar
*/

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
      break;
    }
  }
}
removeName("Ahmad");
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// ######  When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeToArriveCalc() {
  const timeTravel =
    travelInformation.destinationDistance / travelInformation.speed;
  const timeInHours = Math.floor(timeTravel);
  const timeInMinutes = Math.floor((timeTravel - timeInHours) * 60);
  return `You will arrive in ${timeInHours} hours and ${timeInMinutes} minutes`;
}

const travelTime = timeToArriveCalc(travelInformation);

console.log(travelTime);

// ### Series duration of my life

const seriesDurations = [
  {
    title: "Lost",
    days: 3,
    hours: 18,
    minutes: 0,
  },
  {
    title: "Prison Break",
    days: 2,
    hours: 18,
    minutes: 0,
  },
  {
    title: "Breaking Bad",
    days: 1,
    hours: 22,
    minutes: 29,
  },
];

let averageLifeSpan = 80 * 365 * 24 * 60;
let percentageOfTotal = 0;

function logOutSeriesText() {
  for (let i = 0; i < seriesDurations.length; i++) {
    //total duration of the series was calculated as minutes
    (seriesDurations[i].totalDuration =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes),
      // percentage keys and values
      (seriesDurations[i].percentage = (
        (seriesDurations[i].totalDuration * 100) /
        averageLifeSpan
      ).toFixed(3));
  }
  text();
}

function text() {
  seriesDurations.map((i) => {
    console.log(`${i.title} took ${i.percentage}% of my life`);
  });
  lastText();
}
function lastText() {
  seriesDurations.map((i) => {
    percentageOfTotal += +i.percentage;
  });
}

logOutSeriesText();
console.log(`In total that is ${percentageOfTotal.toFixed(3)}% of my life`);

// ##### NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// #### Get a note
function getNote(id) {
  const index = notes.findIndex(function (todo, indx) {
    return todo.id === id;
  });
  return notes[index];
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// ### Log out notes

function logOutNotesFormatted() {
  notes.forEach((i) =>
    console.log(
      `The note with id: ${i.id}, has the following note text: ${i.content}`
    )
  );
}

logOutNotesFormatted();

//CactusIO-interactive (Smart phone usage app) optional

const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date: date, activity: activity, duration: duration });
}
addActivity("23/7-18", "Youtube", 30);

// ###### Show my status - Usage limit

function showStatus() {
  const tDuration = 0;
  const usageLimit = prompt("Please enter your usage limit:");

  activities.forEach(function (i) {
    tDuration += i.duration;
  });
  if (tDuration >= +usageLimit) {
    console.log(
      `You have added ${activities.length} activities. They amount to ${tDuration} mins of usage. You have reached your limit, no more smartphoning for you!`
    );
  } else {
    console.log(
      `You have added ${activities.length} activities. They amount to ${tDuration} min. of usage`
    );
  }
}

showStatus();
