"use strict";

// Declare Dom Elements
const newsContainer = document.querySelector("#news-container");
const btnNextEl = document.querySelector("#btn-next");
const btnPreviousEl = document.querySelector("#btn-prev");
const pageNumEl = document.querySelector("#page-num");

// Get Storage
let pageNumber = 0;
const activeUser = JSON.parse(getFromStorage("active", null)) ?? [];
const npp = Number(activeUser[0].newsPerPage);

// function render data
const renderData = function (data) {
  newsContainer.innerHTML = "";
  let lastPage = Math.ceil(data.length / npp) - 1;
  for (let i = pageNumber * npp; i < pageNumber * npp + npp; i++) {
    const html = `<div class="card flex-row flex-wrap">
    <div class="card mb-3" style="">
  <div class="row no-gutters">
  <div class="col-md-4">
      <img src=${data[i].urlToImage} class="card-img"
        alt=${data[i].title}>
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">${data[i].title}</h5>
    <p class="card-text">${data[i].content}</p>
    <a href=${data[i].url}
    class="btn btn-primary">View</a>
    </div>
    </div>
    </div>
</div>
</div>`;
    newsContainer.insertAdjacentHTML("beforeend", html);
    if (pageNumber === lastPage) {
      btnNextEl.classList.add("hidden");
    }
    if (pageNumber < 1) {
      btnPreviousEl.classList.add("hidden");
    }
  }
};

// Function getdata
const getData = async function () {
  try {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        `category=${activeUser[0].category}&` +
        "apiKey=1ea6752558ac4345953d8596e1fafe38"
    );
    const dataFinal = await data.json();
    renderData(dataFinal.articles);
  } catch (err) {
    console.error(`${err}`);
  }
};
getData();

// Manipulate button Next
btnNextEl.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber++;
  pageNumEl.textContent = `${pageNumber + 1}`;

  btnPreviousEl.classList.remove("hidden");
  getData();
});

// Manipulate button Previous
btnPreviousEl.addEventListener("click", function (e) {
  e.preventDefault();
  pageNumber--;
  pageNumEl.textContent = `${pageNumber + 1}`;

  btnNextEl.classList.remove("hidden");
  getData();
});
