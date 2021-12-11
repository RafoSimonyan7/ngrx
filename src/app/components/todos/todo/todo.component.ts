import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTodosList, State} from "../../../store/reducers";
import {addTodos} from "../../../store/actions/todo.actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos!: Array<string>
  name!: string

  constructor(private store: Store<State>) {
    store.select(selectTodosList)
      .subscribe(todo => this.todos = todo)
  }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.name.trim()) {
      this.store.dispatch(new addTodos(this.name))
    }
    this.name = ''
  }
}
