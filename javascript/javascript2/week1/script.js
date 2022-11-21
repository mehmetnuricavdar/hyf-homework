// ####### 1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let minWord = danishWords[0];
for (let i = 0; i < danishWords.length; i++) {
  if (danishWords[i].length < minWord.length) {
    minWord = danishWords[i];
  }
}
console.log(minWord);

// ######## 1.2. Find and count the Danish letters
const danishLetters = ["å", "æ", "ø"];
const danishString = "Jeg har grød eåøn røde rødeblåæ bil";
const danishString2 = "Blå grød grød med røde bær";

function findingDanishLetter(danskString) {
  let total = 0;
  let letterArray = danskString.split("");
  let newArray = letterArray.filter((x) => danishLetters.includes(x));
  let counts = {};
  newArray.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  for (const value of Object.values(counts)) {
    total += value;
  }
  counts = Object.assign({ total: total }, counts);
  console.log(counts);
}

findingDanishLetter(danishString);
findingDanishLetter(danishString2);

// ######## 2. Spirit animal name generator

const animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

// creating input area for name
const myInput = document.createElement("input");
myInput.setAttribute("id", "textArea");
myInput.setAttribute("placeholder", "Enter your name");
document.querySelector(".myDiv").appendChild(myInput);

// creating button for call the function
const myButton = document.createElement("button");
myButton.setAttribute("type", "submit");
myButton.innerHTML = "Find Your Spirit Animal!";
document.querySelector(".myDiv").appendChild(myButton);

// creating button for call the function when a key pressed
const myKey = document.querySelector("#presKey");
//creating function for generating spirit animals
function spiritAnimalGenerator() {
  const inputValue = document.querySelector("#textArea").value;
  const spiritAnimal = animals[Math.floor(Math.random() * animals.length)];
  if (inputValue !== "") {
    const text = document.createElement("p");
    text.innerHTML = `Hi ${inputValue}, your spirit animal is ${spiritAnimal}`;
    document.body.appendChild(text);
  } else {
    alert("Please enter your name!");
  }
}

// creating event listener with "if" conditional

myButton.addEventListener("click", function () {
  if (document.querySelector("#clicked").checked) {
    spiritAnimalGenerator();
  }
});

myButton.addEventListener("mouseover", function () {
  if (document.querySelector("#onHover").checked) {
    spiritAnimalGenerator();
  }
});

document.addEventListener("keydown", function (event) {
  if (document.querySelector("#pressKey").checked && event.key === "Enter") {
    spiritAnimalGenerator();
  }
});
