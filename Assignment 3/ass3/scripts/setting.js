"use strict";

// Declare Dom Elements
const inputNewsPerPage = document.querySelector("#input-page-size");
const inputCategory = document.querySelector("#input-category");
const submitEl = document.querySelector("#btn-submit");

// Get data from storage
const activeUser = JSON.parse(getFromStorage("active", null)) ?? [];

// Submit btn event
submitEl.addEventListener("click", function () {
  if (inputNewsPerPage.value === "" || inputNewsPerPage.value < 1) {
    alert(`Please input correct number of new per page !!`);
  } else {
    activeUser[0].newsPerPage = inputNewsPerPage.value;
    activeUser[0].category = inputCategory.value;
    setStorage("active", activeUser);
  }
});
