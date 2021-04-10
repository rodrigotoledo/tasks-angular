import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "./task.model";

const TASKS: Array<Task> = [
  { id: 1, title: 'teste' },
  { id: 2, title: 'teste2' },
  { id: 3, title: 'teste4' }
]

@Injectable()

export class TaskObservable{
  public getTasks(): Observable<Task[]>{
    let observable = Observable.create((observer) => {
      observer.next(TASKS);
    }).subscribe();
    return observable;
  }
};
