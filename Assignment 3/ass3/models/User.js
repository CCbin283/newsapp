"use strict";

// Set class
class User {
  constructor(
    userName,
    firstName,
    lastName,
    password,
    ToDo,
    newsPerPage,
    category
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.newsPerPage = newsPerPage;
    this.category = category;
    this.ToDo = ToDo;
    this.ToDo.userName = userName;
  }
}

class ToDo {
  constructor(userName = null, task = null, isDone = false, toDoList = []) {
    this.toDoList = toDoList;
    this.task = task;
    this.isDone = isDone;
  }
}
