import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todos/todo-list/todo-list.component';
import {TodoComponent} from './components/todos/todo/todo.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {LoginPageComponent} from './components/login/login-page/login-page.component';
import {UserPageComponent} from './components/users/user-page/user-page.component';
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from "./store/effects/users.effects";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    LoginPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([UsersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
