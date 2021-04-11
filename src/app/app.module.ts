import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';

const ROUTES = RouterModule.forRoot([
  { path: 'tasks', component: TasksComponent }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
