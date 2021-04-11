import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { Task } from './task.model';

const getTasks: Observable<Task[]> = of([
  { id: 1, title: 'teste' },
  { id: 2, title: 'teste2' },
  { id: 3, title: 'teste4' }
]);

@Injectable()

export class TaskObservable implements OnInit {
  tasks: Observable<Task[]>

  ngOnInit(){
    // let observable = Observable.create((observer) => {
    //   observer.next(TASKS);
    // }).subscribe();
    // this.tasks = observable;
    this.tasks = getTasks;
    // this.tasks.subscribe();
  }
  // public getTasks(): Observable<Task[]>{
  //   let observable = Observable.create((observer) => {
  //     observer.next(TASKS);
  //   }).subscribe();
  //   return observable;
  // }
};
