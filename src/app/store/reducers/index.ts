import {ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {todoReducer, TodoState} from "./todos.reducer";
import {LoginState, LoginUserReducer} from "./login.reducer";
import {usersReducer, UsersState} from "./users.reducer";

export interface State {
  todos: TodoState
  login: LoginState
  users: UsersState
}

export const reducers: ActionReducerMap<State, any> = {
  todos: todoReducer,
  login: LoginUserReducer,
  users: usersReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const selectTodosState = (state: State) => state.todos
export const selectTodosList = createSelector(selectTodosState, (state: TodoState) => state.todos)
export const selectLoginState = (state: State) => state.login
export const selectLoginList = createSelector(selectLoginState, (state: LoginState) => state)
export const selectUsersState = (state: State) => state.users
export const selectUsersList = createSelector(selectUsersState, (state: UsersState) => state.user)
