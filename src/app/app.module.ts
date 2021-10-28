import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicsComponent } from './05-components-basics/basics.component';
import { TodoCardComponent } from './06-components-input-output/todo-card/todo-card.component';
import { TodoListComponent } from './06-components-input-output/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    TodoCardComponent,
    TodoListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
