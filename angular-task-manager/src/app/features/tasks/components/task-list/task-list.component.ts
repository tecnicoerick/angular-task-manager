
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  template: '<div *ngFor="let task of tasks">{{task.title}}</div>'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }
}
