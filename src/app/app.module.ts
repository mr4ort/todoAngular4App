import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/data.service';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { TodoItemsComponent } from './components/todos/todo-items/todo-items.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from './shared/todo.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
