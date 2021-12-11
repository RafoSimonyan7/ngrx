import {createAction, props} from "@ngrx/store";

export enum UsersActionsType {
  LoadUsers = '[Users] Load Users',
  UsersLoadedSuccess = '[Users] Users Loaded Success',
}

export const loadUsers = createAction(UsersActionsType.LoadUsers)
export const UsersLoadedSuccess = createAction(UsersActionsType.UsersLoadedSuccess, props<{users: any}>())
