import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadUsers} from "../../../store/actions/users.actions";
import {Observable} from "rxjs";
import {selectUsersList, State} from "../../../store/reducers";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  users$: Observable<any>

  constructor(private store: Store<State>) {
    this.store.dispatch(loadUsers())
    this.users$ = this.store.select(selectUsersList)
  }

  ngOnInit(): void {

  }

}
