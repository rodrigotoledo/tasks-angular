import { Injectable } from "@angular/core";
import { Task } from "./task.model";

const TASKS: Array<Task> = [
  { id: 1, title: 'teste' },
  { id: 2, title: 'teste2' },
  { id: 3, title: 'teste4' }
]

@Injectable()

export class TaskService{
  public getTasks(): Promise<Task[]>{
    let promise = new Promise((resolve, reject) => {
      if(TASKS.length > 0){
        resolve(TASKS)
      }else{
        let error = "need tasks";
        reject(error);
      }

    });
    return promise;
  }
};
