import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task.model';


@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent implements OnInit {
  public tasks;

  constructor() { }

  ngOnInit() {
    this.tasks = new Array();
  }
}
