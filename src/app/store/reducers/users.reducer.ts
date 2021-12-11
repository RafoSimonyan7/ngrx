import {createReducer, on} from "@ngrx/store";
import {loadUsers, UsersLoadedSuccess} from "../actions/users.actions";

export interface UsersState {
  user: [];
}

const initialState: UsersState = {
  user: [],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, state => ({...state})),
  on(UsersLoadedSuccess, (state, action) => {
    return {
      ...state,
      user: action.users
    }
    }
  )
)
