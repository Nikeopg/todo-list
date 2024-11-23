import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemInterface } from '@todo-list/data';
import { TodoItemComponent } from '@todo-list/todo-item';
import { FeatureAddTaskComponent } from '@todo-list/feature-add-task';
import { MockDataServiceService } from '../../../../shared/data/src/lib/data/services/mock-data-service/mock-data-service.service';

@Component({
  selector: 'lib-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FeatureAddTaskComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  private mockService = inject(MockDataServiceService);
  public todosList$ = this.mockService.getMockTodos();

  ngOnInit(): void {}

  handleFormSubmit(formData: TodoItemInterface) {
    this.mockService.addTodo(formData);
  }
}
