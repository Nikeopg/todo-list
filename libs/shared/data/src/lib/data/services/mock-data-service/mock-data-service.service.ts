import { Injectable } from '@angular/core';
import { TodoItemInterface } from '@todo-list/data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataServiceService {
  public todosList: TodoItemInterface[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Example of description 1',
      dueDate: new Date(),
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Example of description 2',
      dueDate: new Date(),
      completed: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description:
        'Example of description 3',
      dueDate: new Date(),
      completed: true,
    },
  ];

  private todosSubject = new BehaviorSubject<TodoItemInterface[]>(
    this.todosList
  );
  public todos$: Observable<TodoItemInterface[]> =
    this.todosSubject.asObservable();

  constructor() {}

  public getMockTodos() {
    return this.todos$;
  }

  public addTodo(todo: TodoItemInterface): void {
    const currentTodos = this.todosSubject.value;
    this.todosSubject.next([...currentTodos, todo]);
  }

  public updateTodo(updatedTodo: TodoItemInterface): void {
    const currentTodos = this.todosSubject.value;
    const index = currentTodos.findIndex((item) => item.id === updatedTodo.id);
    if (index !== -1) {
      currentTodos[index] = updatedTodo;
      this.todosSubject.next([...currentTodos]);
    }
  }

  public deleteTodo(todoId: number): void {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = currentTodos.filter((item) => item.id !== todoId);
    this.todosSubject.next(updatedTodos);
  }
}
