import { Component } from '@angular/core';
import { Task } from './tasks/shared/task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'task-manager';
  task: Task = new Task(21, 'testing');
}
