"use strict";

// Declare Dom Element
const inputUsernameEl = document.querySelector("#input-username");
const inputPasswordEl = document.querySelector("#input-password");
const submitEl = document.querySelector("#btn-submit");

// getStorage
const userArr = JSON.parse(getFromStorage("a", null)) ?? [];
const activeUser = JSON.parse(getFromStorage("active", null)) ?? [];

// Set button Submit
submitEl.addEventListener("click", function () {
  if (inputUsernameEl.value === "" || inputPasswordEl.value === "") {
    alert("Please no empty field !!");
  }
  let currentCheck = false;
  for (let i = 0; i < userArr.length; i++) {
    if (
      inputUsernameEl.value === userArr[i].userName &&
      inputPasswordEl.value === userArr[i].password
    ) {
      currentCheck = true;
      activeUser.push(userArr[i]);
      setStorage("active", activeUser);
      window.location.href = "../index.html";
    }
  }
  if (currentCheck === false) {
    alert("Wrong username or password!");
  }
});
