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

function travelTimeCalc(travelInformation) {
  return travelInformation.destinationDistance / travelInformation.speed;
}

const travelTime = travelTimeCalc(travelInformation);
const travelHours = Math.floor(travelTime);
const travelMinutes = travelTime - travelHours;

console.log(travelTime); // 8 hours and 38 minutes

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

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
