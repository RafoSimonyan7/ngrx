import { Action, createReducer, on } from '@ngrx/store';
import {addTodos, TodoActions, TodoActionTypes} from "../actions/todo.actions";


export const todosFeatureKey = 'todos';

export interface TodoState {
  todos: Array<string>
}

export const initialState: TodoState = {
  todos: []
};

export function todoReducer (state: TodoState = initialState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.addTodos:
      return {...state, todos: [...state.todos, action.todo]};
    case TodoActionTypes.removeTodos:
      return {...state, todos: state.todos.filter(todo => todo !== action.todo)};

    default:
      return state
  }
}

