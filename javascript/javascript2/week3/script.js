// ########  Warmups
// ######## 1.1
const text = () => {
  console.log("Called after 2.5 seconds");
};

setTimeout(text, 2500);

// ####### 1.2
const hw2 = (delay, stringToLog) => {
  const text = () => {
    console.log(stringToLog);
  };

  setTimeout(text, delay);
};

hw2(5000, "Hello World!");

// ######## 1.3
const clickButton = document.querySelector("#click");
clickButton.addEventListener("click", () => {
  hw2(5000, "Called after 5 seconds");
});

// ######### 1.4

const firstFunction = () => console.log("Earth");
const secondFunction = () => console.log("Saturn");
const thirdFunction = (planetLogFunction) => {
  if (typeof planetLogFunction === "function") {
    if (planetLogFunction === firstFunction) {
      return firstFunction();
    } else if (planetLogFunction === secondFunction) {
      return secondFunction();
    }
  }
};
thirdFunction(firstFunction);
thirdFunction(secondFunction);

// ########## 1.5 "Log location"
const logButton = document.querySelector("#find-me");
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

logButton.addEventListener("click", geoFindMe);

// ########### 1.6 Google maps
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

// #### 1.7

// #### 1.8
window.addEventListener("dblclick", (e) => {
  console.log("Double-click detected");
});

// ##### 1.9

// ############ 2. Function as a variable ##########

// 2.1
const greetPeople = () => {
  console.log("Hello People!");
};

const sayFirstname = () => {
  console.log("My first name is Mehmet");
};

const sayLastname = () => {
  console.log("My last name is Cavdar");
};

const funcsArr = [greetPeople, sayFirstname, sayLastname];

funcsArr.forEach((func) => {
  func();
});

//2.2

function greetings() {
  console.log("What's up World?");
}

const farewell = () => {
  console.log("Good bye world!");
};
greetings();
farewell();

// 2.3

const functionObj = {
  question: () => {
    console.log("How are you");
  },
};

functionObj.question();
