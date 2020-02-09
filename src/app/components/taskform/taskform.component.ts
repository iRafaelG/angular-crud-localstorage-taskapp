import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
  }

  addTask(title: HTMLInputElement, description: HTMLInputElement) {
    
    this.taskService.addTask({
      title: title.value,
      description: description.value,
      hide: true      
    });

    title.value = '';
    description.value = '';
    title.focus();

    return false; // Stop the default behavior of the form event
  }

}
