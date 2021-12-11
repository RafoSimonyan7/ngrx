import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {selectLoginList, State} from "../../../store/reducers";
import {loginUser} from "../../../store/actions/login.action";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user: FormGroup
  loggedUser: any

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.store.select(selectLoginList)
      .subscribe(user => this.loggedUser = user)


    this.user = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(loginUser({userName: this.user.value.userName, password: this.user.value.password}))
  }

}
