import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {TodoModule} from './todo/todo.module';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomePageComponent},
      ...TodoModule.routes
    ]),
    TodoModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    WelcomePageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
