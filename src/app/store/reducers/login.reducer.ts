import {createReducer, on} from "@ngrx/store";
import {loginUser, userError} from "../actions/login.action";

export interface LoginState {
  userName: string,
  password: string
}

export const initialState: LoginState = {
  userName: '',
  password: ''
};

export const LoginUserReducer = createReducer(
  initialState,
  on(loginUser, (state, {userName, password}) => ({...state, userName: userName, password: password})),
  on(userError, (state, {payload}) => ({...state, userName: payload.userName, password: payload.password}))
)
