import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIteimInterface } from '@todo-list/data';
import { TodoItemComponent } from '@todo-list/todo-item';
import { FeatureAddTaskComponent } from '@todo-list/feature-add-task';

@Component({
  selector: 'lib-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FeatureAddTaskComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  public todosList: TodoIteimInterface[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Desc of task 1.',
      dueDate: new Date(),
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Desc of task 2.',
      dueDate: new Date(),
      completed: true,
    },
  ];

  public newTask: string = '';

  ngOnInit(): void {
    console.log(this.todosList);
  }
}
