import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input, OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemInterface } from '@todo-list/data';
import { TuiCheckbox } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockDataServiceService } from '../../../../shared/data/src/lib/data/services/mock-data-service/mock-data-service.service';

@Component({
  selector: 'lib-todo-item',
  standalone: true,
  imports: [CommonModule, TuiCheckbox, ReactiveFormsModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {

  @Input() todo?: TodoItemInterface;

  private readonly todosMockService = inject(MockDataServiceService);

  onCheckboxChange() {
    if (this.todo) {
      const updatedTodo = { ...this.todo, completed: !this.todo.completed };
      this.todosMockService.updateTodo(updatedTodo);
    }
  }

}
