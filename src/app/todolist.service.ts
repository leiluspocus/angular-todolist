import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {

  incrementId: number;

  todoList: TodoListItem[] = [
  ];


  constructor() {
    this.incrementId = Number(localStorage.getItem("increment_id") || 8000) ; 
    this.todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  }


  appendItem(item: {name: string, date: Date}): void {
    console.log(item.date);
    this.todoList.push({name : item.name , isDone : false, dueDate : item.date, id: this.incrementId });
    this.todoList = this.todoList.sort((a, b) => (a.dueDate < b.dueDate)? 1 : -1);
    this.incrementId++;
    console.log(this.todoList);
    this.saveData();
  }

  removeItem(id: number): void {
    this.todoList = this.todoList.filter((item) =>  item.id !== id );
    this.saveData();
  }

  editItem(id: number, changes: any): void {
    this.todoList = this.todoList.map((item) => {
      if (item.id === id) {
        return Object.assign({}, item, changes);
      }
      else {
        return item;
      }
    });
    this.saveData();
  }

  markAsDone(item: TodoListItem): void {
    if ( item.isDone == true ) {
      this.editItem(item.id, {isDone: false})
    }
    else {
      this.editItem(item.id, {isDone: true})
    }
  }

  saveData() : void {
    localStorage.setItem("todoList", JSON.stringify(this.todoList));
    localStorage.setItem("increment_id", String(this.incrementId));
  }

  getTodoList() : TodoListItem[] {
    return this.todoList;
  }

}

export interface TodoListItem {
  name: string;
  isDone: boolean;
  dueDate: Date;
  id: number;
}