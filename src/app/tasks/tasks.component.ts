import { Component, OnInit } from '@angular/core';
import { faInfo, faAngry } from '@fortawesome/free-solid-svg-icons';
import { Task } from './shared/task.model';
// import { TaskObservable } from './shared/task.observable';
import { Observable, of } from 'rxjs';

const getTasks: Observable<Task[]> = of([
  { id: 1, title: 'teste' },
  { id: 2, title: 'teste2' },
  { id: 3, title: 'teste4' }
]);


@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  providers: [  ]
  // providers: [ TaskObservable ]
})

export class TasksComponent implements OnInit {
  public tasks: Observable<Task[]>;
  public selectedTask: Task;
  public faInfo = faInfo;
  public faAngry = faAngry;
  // private taskObservable: TaskObservable;

  constructor() { }

  ngOnInit() {
    this.tasks = getTasks;
  }

  public onSelect(task: Task):void {
    this.selectedTask = task;
  }
}
