"use strict";

// function Storage
function getFromStorage(key, defaultValue) {
  return localStorage.getItem(key) ?? defaultValue;
}

function setStorage(key, arr) {
  return localStorage.setItem(key, JSON.stringify(arr));
}
