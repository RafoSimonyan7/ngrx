import {Component, Input, OnInit} from '@angular/core';
import {State} from "../../../store/reducers";
import {Store} from "@ngrx/store";
import {removeTodos} from "../../../store/actions/todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos!: Array<string>

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  deleteTodo(todo: string) {
    this.store.dispatch(new removeTodos(todo))
  }
}
