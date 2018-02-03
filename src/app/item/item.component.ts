import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../todolist.service';

@Component({
  selector: 'todo-item',
  template: `
    <p [class.done]="item.isDone">
      <span #taskId>{{item.id}}</span> # {{ item.name }} > À faire le {{ item.dueDate | date:'fullDate'}} 
      <input  type="checkbox" (click)="markAsDone()" />
      <button (click)="delete()">x</button> 
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: TodoListItem;

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onDone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(): void {
    console.log("je supprime " + this.item.id + " bébé");
    this.onDelete.emit(this.item.id);
  }

  markAsDone(): void {
    this.onDone.emit(this.item);
  }

}
