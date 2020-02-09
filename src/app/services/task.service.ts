import { Injectable } from "@angular/core";
import { Task } from "../models/Task";

@Injectable()
export class TaskService {
  tasks: Task[];

  constructor() {
    this.tasks = [
      //{title: "Task one", description: "Task one", hide: true},
      //{title: "Task two", description: "Task two", hide: true}
    ];
  }

  getTask() {
    if (localStorage.getItem("tasks") === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
      return this.tasks;
    }
  }

  addTask(task: Task) {
    if (localStorage.getItem("tasks") === null) {
      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    } else {      
      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] == task) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
