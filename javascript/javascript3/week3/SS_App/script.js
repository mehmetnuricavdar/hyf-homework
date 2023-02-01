(() => {
  "use strict";

  // creating crudcrud url
  const BASE_URL = `https://crudcrud.com/api/${API_KEY}`;

  // creating search variable for value of the search
  const search = document.querySelector(".search-bar");
  const title = document.querySelector(".title");
  const container = document.querySelector(".container");
  const showListElmnt = document.querySelector(".showListUl");
  let capturedSites = [];

  // ****************** ScreenShot API functions ***************
  // default variables for ss api
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": SS_API_KEY,
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };

  // creating a function for fetching ss api
  const getSS = async () => {
    if (search.value !== "" && title.value !== "") {
      try {
        const res = await fetch(
          `https://website-screenshot6.p.rapidapi.com/screenshot?url=${search.value}&width=1920&height=1080&fullscreen=true`,
          options
        );
        const data = await res.json();
        handleCreatePost(data);

        return data;
      } catch (err) {
        console.error(err);
        alert("Sorry, there was a problem. Please try later.");
      }
    }
    alert("Please enter a valid URL");
  };

  // ************ creating function for crudcrud api
  let blogPosts;

  const handleCreatePost = async (ssData) => {
    const body = {
      image_url: ssData.screenshotUrl,
    };

    console.log(body);

    const response = await fetch(`${BASE_URL}/blog`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    container.innerHTML += createBlogPostDiv(data);

    // event listeners and functions for SAVE and DELETE buttons
    document.querySelector("#saveBtn").addEventListener("click", () => {
      const imageUrl = data.image_url;
      const link = document.createElement("a");
      link.download = "image.jpg";
      link.href = imageUrl;
      link.click();
    });
    document
      .querySelector("#deleteBtn")
      .addEventListener("click", async (event) => {
        const id = event.target.parentNode.dataset.id;
        await handleDeletePost(id);
      });
  };

  const createBlogPostDiv = (blogPost) => {
    const results = `<div class="results" data-id="${blogPost._id}"><div>
    <img src="${blogPost.image_url}" alt="${title.value}" width="480px">
    <figcaption>${title.value}</figcaption></div>
            <button type="button" id="saveBtn">SAVE</button>
            <button type="button" id="deleteBtn" >DELETE</button>
    </div>`;
    capturedSites.push({ title: title.value, website: search.value }); // add the URL to the array

    search.value = "";
    title.value = "";
    return results;
  };

  const handleDeletePost = async (id) => {
    const res = await fetch(`${BASE_URL}/blog/${id}`, {
      method: "DELETE",
    });
    const imageToDelete = document.querySelector(`[data-id="${id}"]`);
    if (imageToDelete) {
      imageToDelete.parentNode.removeChild(imageToDelete);
    }
  };

  const showCapturedSites = () => {
    if (capturedSites.length > 0) {
      capturedSites.forEach((site) => {
        const item = document.createElement("li");
        item.innerHTML = `${site.title}: ${site.website}`;
        showListElmnt.appendChild(item);
        document.querySelector(".list").classList.add("showList");
      });
    } else {
      alert("Please first capture a website screenshot");
    }
  };

  document.querySelector("#captureBtn").addEventListener("click", (event) => {
    event.preventDefault();
    getSS();
  });

  document.querySelector("#showListBtn").addEventListener("click", (event) => {
    event.preventDefault();
    showCapturedSites();
    
  });
})();
