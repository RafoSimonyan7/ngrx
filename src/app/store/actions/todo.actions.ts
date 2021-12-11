import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  addTodos = '[Todo] Add Todos',
  removeTodos = '[Todo] Remove Todos',
}

export class addTodos implements Action {
  readonly type = TodoActionTypes.addTodos;

  constructor(public todo: string) {}
}
export class removeTodos implements Action {
  readonly type = TodoActionTypes.removeTodos;

  constructor(public todo: string) {}
}


export type TodoActions = addTodos | removeTodos;

