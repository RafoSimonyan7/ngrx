import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../../services/users.service";
import {loadUsers, UsersLoadedSuccess} from "../actions/users.actions";
import {map, mergeMap} from "rxjs/operators";

@Injectable()
export class UsersEffects {

  loadusers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(action => {
        return this.usersService.getUsers().pipe(
          map(user => {
              return UsersLoadedSuccess({users: user})
          })
        )
      })
    )
  });

  constructor(private actions$: Actions, private usersService: UsersService) {
  }
}
