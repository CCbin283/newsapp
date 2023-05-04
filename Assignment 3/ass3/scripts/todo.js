"use strict";

// Declare DOM Elements
const inputTaskEl = document.querySelector("#input-task");
const addEl = document.querySelector("#btn-add");
const listEl = document.querySelector("#todo-list");

// Get data from Storage
const activeUser = JSON.parse(getFromStorage("active", null)) ?? [];
const toDoArr = activeUser[0].ToDo.toDoList;

// Check task function
const checkTask = function (index) {
  toDoArr[index].isDone = !toDoArr[index].isDone;
  saveToDoList();
  setStorage("active", activeUser);
  renderToDoList();
};

// Delete Task function
const deleteTask = function (index) {
  if (confirm("Are you sure ???")) {
    toDoArr.splice(index, 1);
    saveToDoList();
    setStorage("active", activeUser);
    renderToDoList();
  }
};

const saveToDoList = function () {
  activeUser[0].ToDo.toDoList = toDoArr;
};
// Render List function
const renderToDoList = function () {
  listEl.innerHTML = "";
  for (let i = 0; i < toDoArr.length; i++) {
    let classCheck = toDoArr[i].isDone ? "checked" : "";
    const html = ` <li class = ${classCheck}><div onclick = " checkTask(${i})" >
     ${toDoArr[i].task}</div>
    <span class="close" onclick = "deleteTask(${i})">×</span></li>
    `;

    listEl.insertAdjacentHTML("beforeend", html);
  }
};
renderToDoList();

// Button Add Event
addEl.addEventListener("click", function () {
  const todoData = new ToDo(activeUser[0].userName, inputTaskEl.value, false);
  if (inputTaskEl.value === "") {
    alert("Please no empty field !!!");
  } else {
    toDoArr.push(todoData);
    saveToDoList();
    setStorage("active", activeUser);
    renderToDoList();
    inputTaskEl.value = "";
  }
});
