import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: Task[];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTask();
  }

}
