"use strict";

//Declare Dom Elements
const inputFirstNameEl = document.querySelector("#input-firstname");
const inputLastNameEl = document.querySelector("#input-lastname");
const inputUserNameEl = document.querySelector("#input-username");
const inputPasswordEl = document.querySelector("#input-password");
const inputPasswordConfirmEl = document.querySelector(
  "#input-password-confirm"
);
const submitEl = document.querySelector("#btn-submit");

// Get data from storage
const userArr = JSON.parse(getFromStorage("a", null)) ?? [];
const userNameArr = [];

// Submit btn event
submitEl.addEventListener("click", function () {
  const data = new User(
    inputUserNameEl.value,
    inputFirstNameEl.value,
    inputLastNameEl.value,
    inputPasswordEl.value,
    new ToDo()
  );
  for (let i = 0; i < userNameArr.length; i++) {
    const validateUserName = Boolean(data.userName === userNameArr[i]);

    if (validateUserName === true) {
      alert(`UserName aready taken!`);
      return;
    }
  }
  if (
    data.firstName === "" ||
    data.lastName === "" ||
    data.userName === "" ||
    data.password === "" ||
    inputPasswordConfirmEl.value === ""
  ) {
    alert("Please no empty field !!!");
  } else if (data.password.length < 8) {
    alert("Password must have at least 8 characters !");
  } else if (inputPasswordConfirmEl.value !== inputPasswordEl.value) {
    alert("Password Confirm and Password is not the same !");
  } else {
    userNameArr.push(data.userName);
    userArr.push(data);
    setStorage("a", userArr);

    window.location.assign("login.html");
  }
});
