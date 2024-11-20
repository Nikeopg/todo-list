import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIteimInterface } from '@todo-list/data';
import { TodoItemComponent } from '@todo-list/todo-item';
import { FeatureAddTaskComponent } from '@todo-list/feature-add-task';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'lib-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FeatureAddTaskComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.todosList);
  }

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
    {
      id: 3,
      title: 'Task 3',
      description: 'Desc of task 3. 123213123123123123123123 12312312312 312 312 3',
      dueDate: new Date(),
      completed: true,
    },
  ];

  handleFormSubmit(formData: TodoIteimInterface) {
    console.log(`родитель полутал`, formData);

    this.todosList = [...this.todosList, formData]
  }


}
