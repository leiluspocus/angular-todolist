import { Component } from '@angular/core';
import { TodoListItem, TodolistService } from '../app/todolist.service';

/* Pour l'affichage ! */
@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  todoList: TodoListItem[];

  constructor(private service: TodolistService) { }

  ngOnInit() {
    this.todoList = this.service.getTodoList();
  }

  getTodoList() : any {
    return this.service.getTodoList();
  } 

  appendItem(item: {name: string, date: Date}): void {
    this.service.appendItem(item);
  }

  delete(id: number): void {
    this.service.removeItem(id);
    this.todoList = this.service.getTodoList();
  }

  done(item: TodoListItem): void {
    console.log("C DONE BB " + item);
    this.service.markAsDone(item);
    this.todoList = this.service.getTodoList();
  }

}
 