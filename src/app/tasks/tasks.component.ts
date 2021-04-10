import { Component, OnInit } from '@angular/core';
import { faInfo, faAngry } from '@fortawesome/free-solid-svg-icons';
import { Task } from './shared/task.model';
import { TaskObservable } from './shared/task.observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  providers: [ TaskObservable ]
})

export class TasksComponent implements OnInit {
  public tasks: Observable<Task[]>;
  public selectedTask: Task;
  public faInfo = faInfo;
  public faAngry = faAngry;
  private taskObservable: TaskObservable;

  constructor(taskObservable: TaskObservable) {
    this.taskObservable = taskObservable;
  }

  ngOnInit() {
    this.tasks = this.taskObservable.getTasks();
  }

  public onSelect(task: Task):void {
    this.selectedTask = task;
  }
}
