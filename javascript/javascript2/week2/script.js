(function () {
  "use strict";
  // ###### 1.1. Doubling of number

  let numbers = [1, 2, 3, 4];
  let newNumbers = [];

  numbers.forEach((i) => {
    if (i % 2 !== 0) {
      newNumbers.push(i * 2);
    }
  });

  // console.log("The doubled numbers are", newNumbers); // [2, 6]

  // ###### 1.2. Working with movies

  // STEP: 1 & 2
  document
    .querySelector("button")
    .addEventListener("click", function getOption() {
      // declaring variables for getting values for length of the title
      const minTitleLength = document.querySelector("#min-title-length").value;
      const maxTitleLength = document.querySelector("#max-title-length").value;
      // new arrays for title lengths
      function creatingTitlelength() {
        if (minTitleLength !== "" && maxTitleLength !== "") {
          const warning = document.createElement("h2");
          warning.innerHTML = "Please only fill one option";
          document.body.appendChild(warning);
        }
      }
      creatingTitlelength();
      const titleLength = movies.filter((i) => {
        if (minTitleLength !== "" && maxTitleLength === "") {
          return i.title.length < minTitleLength;
        } else if (maxTitleLength !== "" && minTitleLength === "") {
          return i.title.length > maxTitleLength;
        }
      });

      //    console.log("MOVIES' BY TITLE", titleLength);

      //STEP : 3
      // variables for date filter

      const fromDate = document.querySelector("#fromDate").value;
      const toDate = document.querySelector("#toDate").value;

      const dateFilter = movies.filter(
        (i) => i.year > fromDate && i.year < toDate
      );
      //console.log(dateFilter);
      // STEP: 4
      // variables for rating filter
      const ratingScore = document.querySelector("#rating-filter").value;
      const ratingScroreNumFrom = document.querySelector(
        "#rating-filter-score-from"
      ).value;
      const ratingScroreNumTo = document.querySelector(
        "#rating-filter-score-to"
      ).value;
      const ratingScroreNum = dateFilter.filter(
        (i) => i.rating >= ratingScroreNumFrom && i.rating <= ratingScroreNumTo
      );

      const badRating = dateFilter.filter((i) => i.rating < 4);
      const averageRating = dateFilter.filter(
        (i) => i.rating >= 4 && i.rating < 7
      );
      const goodRating = dateFilter.filter((i) => i.rating >= 7);

      function ratingsFilter() {
        if (ratingScroreNumFrom === "--" && ratingScroreNumTo === "--") {
          const ratingDisplay = document.createElement("div");
          document.body.append(ratingDisplay);
          ratingDisplay.innerHTML = "<h2>Movies</h2>";
          let ratingDisplayMovies = document.createElement("ol");
          ratingDisplay.appendChild(ratingDisplayMovies);
          if (ratingScore === "Bad") {
            for (let i = 0; i < badRating.length; i++) {
              let ratingDisplayMoviesList = document.createElement("li");
              ratingDisplayMovies.append(ratingDisplayMoviesList);
              ratingDisplayMoviesList.innerHTML = badRating[i].title;
            }
          } else if (ratingScore === "Average") {
            for (let i = 0; i < averageRating.length; i++) {
              let ratingDisplayMoviesList = document.createElement("li");
              ratingDisplayMovies.append(ratingDisplayMoviesList);
              ratingDisplayMoviesList.innerHTML = averageRating[i].title;
            }
          } else {
            for (let i = 0; i < goodRating.length; i++) {
              let ratingDisplayMoviesList = document.createElement("li");
              ratingDisplayMovies.append(ratingDisplayMoviesList);
              ratingDisplayMoviesList.innerHTML = goodRating[i].title;
            }
          }
        } else if (ratingScore === "--") {
          if (
            ratingScroreNumFrom !== "--" &&
            ratingScroreNumTo !== "--" &&
            ratingScroreNumFrom <= ratingScroreNumTo
          ) {
            for (let i = 0; i < ratingScroreNum.length; i++) {
              let ratingDisplayMoviesList = document.createElement("li");
              ratingDisplayMovies.append(ratingDisplayMoviesList);
              ratingDisplayMoviesList.innerHTML = ratingScroreNum[i].title;
            }
          } else {
            const warning = document.createElement("h2");
            warning.innerHTML = "Please choose bigger number than from number";
            document.body.appendChild(warning);
          }
        } else {
          const warning = document.createElement("h2");
          warning.innerHTML = "Please only fill one option for rating!";
          document.body.appendChild(warning);
        }
      }
      ratingsFilter();
    });

  /*
STEP:6
Count the total number of movies containing 
any of following keywords:Surfer, Alien or Benjamin
 */

  const titleArray = movies.map((i) => i.title); // creating an array for only title
  const onlyTitleArray = [];
  const toArray = () => {
    for (let i = 0; i < titleArray.length; i++) {
      const newTitleArray = titleArray[i].split(" ");
      onlyTitleArray.push(newTitleArray);
    }
  };
  toArray();
  // creating a function for finding words
  const findWord = ["Surfer", "Alien", "Benjamin", "Hours"];

  function findingWord() {
    let total = 0;
    let titleWordsCounts = [];

    for (let i = 0; i < onlyTitleArray.length; i++) {
      for (let j = 0; j < onlyTitleArray[i].length; j++)
        titleWordsCounts.push(onlyTitleArray[i][j].toLowerCase()); // before pushing to array lovercasing the words
    }
    const findWordLoverCase = [];
    findWord.forEach((i) => findWordLoverCase.push(i.toLowerCase())); // lovercasing the words that be wanted to found
    const newArray = titleWordsCounts.filter((x) =>
      findWordLoverCase.includes(x)
    );
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
  findingWord();

  // STEP : 7

  const displayDoubleWord = () => {
    const regex = /(\b\w+\b).*\b\1\b/i;
    const doubleWordsDisplay = document.createElement("details");
    document.body.append(doubleWordsDisplay);
    doubleWordsDisplay.className = "displayDoubleWord-div";
    doubleWordsDisplay.innerHTML =
      "<summary>Movie title has word in the title is duplicated</summary>";
    let doubleWordsDisplayList = document.createElement("ol");
    doubleWordsDisplay.appendChild(doubleWordsDisplayList);

    const doubleWordsTitles = movies.filter((i) => regex.test(i.title));
    for (let i = 0; i < doubleWordsTitles.length; i++) {
      let doubleList = document.createElement("li");
      doubleWordsDisplayList.append(doubleList);
      doubleList.innerHTML = doubleWordsTitles[i].title;
    }
  };
  displayDoubleWord();
})();

// ### Calculate the average rating of all the movies using reduce. Optional

/*Count the total number of Good, Average and Bad movies using reduce.
 A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
 */
