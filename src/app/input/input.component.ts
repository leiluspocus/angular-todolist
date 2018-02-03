import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <p>
  <input #inputElementSerieux>
  <input #inputDate type="date">
  <button (click)="save(inputElementSerieux.value, inputDate.value)">Save</button>
  </p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output()
  onSave = new EventEmitter();

  constructor() { }

  ngOnInit() { 
    // setTimeout(() => this.changeTitle('I love pouet'), 1000);
  }

  save(name: string, date: Date) : void {
    console.log(name + date);
    this.onSave.emit({name, date : new Date(date)});
  }
}
