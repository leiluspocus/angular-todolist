import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { TodolistService } from './todolist.service';



@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    /* shortcut TodolistService */
    { provide: TodolistService, useClass : TodolistService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
