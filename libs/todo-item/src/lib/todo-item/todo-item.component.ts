import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input, OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemInterface } from '@todo-list/data';
import { TUI_CONFIRM, TuiCheckbox } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MockDataServiceService
} from '../../../../shared/data/src/lib/data/services/mock-data-service/mock-data-service.service';
import { FeatureDeleteTaskComponent } from '@todo-list/feature-delete-task';
import { TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'lib-todo-item',
  standalone: true,
  imports: [
    CommonModule,
    TuiCheckbox,
    ReactiveFormsModule,
    FormsModule,
    FeatureDeleteTaskComponent
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() todo?: TodoItemInterface;


  private readonly dialogs = inject(TuiDialogService);
  private readonly todosMockService = inject(MockDataServiceService);

  public onCheckboxChange() {
    if (this.todo) {
      const updatedTodo = { ...this.todo, completed: !this.todo.completed };
      this.todosMockService.updateTodo(updatedTodo);
    }
  }

  public onDeleteTask(taskId: number) {
    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        label: 'Are you sure?',
        data: {
          appearance: 'accent',

          content: 'This task will be deleted!',
          yes: 'Delete !',
          no: 'No-no',
        },
      })
      .subscribe((response) => {
        if(response) {
          console.log(`gogogog`);
          this.todosMockService.deleteTodo(taskId);
        } else {
          console.log(`nononon`);
        }
      });
  }
}
