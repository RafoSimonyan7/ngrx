import {createAction, props} from '@ngrx/store';

export enum LoginActionTypes {
  login = '[user] user login',
  error = '[user] user error',
}

export const loginUser = createAction(
  LoginActionTypes.login,
  props<{userName: string, password: string}>()
)

export const userError = createAction(
  LoginActionTypes.error,
  props<{payload: {userName: string, password: string}}>()
)






