import { Component, OnInit } from '@angular/core';
import { TodoItem } from './TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todoItems: TodoItem[];
  private lastIndex: number;

  constructor() {
    this.todoItems = [];
    this.lastIndex = 1;
  }

  addItem(input: HTMLInputElement) {
    this.todoItems.push(new TodoItem(this.lastIndex++, input.value));
    input.value = '';
  }

  toggleComplete(todoItem :TodoItem) {
    todoItem.complete = !todoItem.complete;
  }

  removeItem(todoItem :TodoItem) {
    this.todoItems = this.todoItems.filter(it => it.id !== todoItem.id)
  }
}
