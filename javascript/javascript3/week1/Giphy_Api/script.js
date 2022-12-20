(function () {
  //creating variables for DOM elements

  const searchBtn = document.querySelector("button");

  const giphyApi = () => {
    let out = document.querySelector(".out");

    let searchNum = document.querySelector(".search-num").value;
    let searchInput = document.querySelector(".search-bar").value;

    if (searchInput !== "") {
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${
        searchNum || 5
      }&q=${searchInput}`;

      fetch(url)
        .then((response) => response.json())
        .then((content) => {
          //data, pagination, meta
          // creating html elements for each gif results
          content.data.forEach((i) => {
            console.log(i);
            let results = document.createElement("div");
            results.className = "results";
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let fc = document.createElement("figcaption");
            img.src = i.images.downsized.url;
            img.alt = i.title;
            // styling image size for stable size
            img.style.height = "240px";
            img.style.width = "340px";
            // appending elements
            fc.textContent = i.title;
            figure.appendChild(img);
            figure.appendChild(fc);
            results.appendChild(figure);
            out.insertAdjacentElement("afterbegin", results);
            // removing warning if it is exist
            if (document.querySelector("h2")) {
              out.removeChild(document.querySelector("h2"));
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let warning = document.createElement("h2");
      warning.className = "warning";
      warning.textContent = "Please enter a valid search keyword!";
      out.insertAdjacentElement("afterbegin", warning);
    }
    document.querySelector(".search-num").value = "";
    document.querySelector(".search-bar").value = "";
  };

  searchBtn.addEventListener("click", giphyApi);
  window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      giphyApi();
    }
  });
})();
