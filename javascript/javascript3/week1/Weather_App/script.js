(function () {
  "use strict";
  const myMap = L.map("myMap");
  let didSearch = false;

  const fetchWeather = async (city) => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        API_KEY
    );
    let data = await response.json();
    displayWeather(data);
  };
  const displayWeather = (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { sunrise, sunset } = data.sys;
    const { lat, lon } = data.coord;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.floor(temp) + " °C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + Math.floor(speed) + " km/h";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    document.querySelector(".sunrise").innerText =
      "Sunrise: " + moment(sunrise * 1000).format("HH:mm a");
    document.querySelector(".sunset").innerText =
      "Sunset: " + moment(sunset * 1000).format("HH:mm a");

    document.querySelector("#myMap").style.display = "block";

    // creating map
    const attribution =
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

    if (!didSearch) {
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(myMap);
      didSearch = true;
    }
    myMap.setView([lat, lon], 11);
  };

  // getting user location
  const findMyState = () => {
    const success = (position) => {
      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      localStorage.setItem("latitude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${parseFloat(
        localStorage.latitude
      )}&longitude=${parseFloat(localStorage.longitude)}&localityLanguage=en`;
      const findLocName = async () => {
        const res = await fetch(geoApiUrl);
        const geoData = await res.json();
        fetchWeather(geoData.city);
      };
      findLocName();
    };
    const error = () => {
      console.log("Unable to retrieve your location!");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };
  // creating search function for event listeners
  const search = () => {
    let searchValue = document.querySelector(".search-bar").value;
    fetchWeather(searchValue);
    document.querySelector(".search-bar").value = "";
  };
  // calling functions
  document
    .querySelector("#current-location")
    .addEventListener("click", findMyState);

  document.querySelector("#search-button").addEventListener("click", search);
  document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });
  window.addEventListener("reload", findMyState);
})();
