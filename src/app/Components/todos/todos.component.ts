import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItems: any;
  todos: Todo[];
  constructor() { 
    this.localItems = localStorage.getItem("todos");
    if(this.localItems==null){
      this.todos = []
    } else {
      this.todos = JSON.parse(this.localItems)
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    let idx = this.todos.indexOf(todo)
    this.todos.splice(idx,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo: Todo){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
