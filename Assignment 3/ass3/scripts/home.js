"use strict";
const loginModalEl = document.querySelector("#login-modal");
const mainContentEl = document.querySelector(`#main-content`);
const welcomeMessageEl = document.querySelector("#welcome-message");
const logoutEl = document.querySelector("#btn-logout");

const userArr = JSON.parse(getFromStorage("a", null)) ?? [];
const activeUser = JSON.parse(getFromStorage("active", null)) ?? [];

const saveActiveUser = function () {
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].userName === activeUser[0].userName) {
      userArr.splice(i, 1, activeUser[0]);
    }
  }
};

// Home page Interface
window.onload = (event) => {
  if (activeUser.length != 0) {
    loginModalEl.classList.add("hidden");
    mainContentEl.classList.remove("hidden");
    welcomeMessageEl.textContent = `Welcome ${activeUser[0].firstName}`;
  }
};

logoutEl.addEventListener("click", function () {
  loginModalEl.classList.remove("hidden");
  mainContentEl.classList.add("hidden");
  saveActiveUser();
  activeUser.shift();
  setStorage("active", activeUser);
  setStorage("a", userArr);
  localStorage.removeItem("active");
});
