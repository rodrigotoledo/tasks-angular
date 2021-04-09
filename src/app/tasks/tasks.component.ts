import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Task } from './shared/task.model';


@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent implements OnInit {
  public tasks;
  public selectedTask: Task;
  public faInfo = faInfo;

  constructor() { }

  ngOnInit() {
    this.tasks = new Array();
  }

  public onSelect(task: Task):void {
    this.selectedTask = task;
  }
}
