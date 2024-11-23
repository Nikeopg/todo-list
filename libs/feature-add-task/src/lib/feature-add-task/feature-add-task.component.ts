import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  TuiInputModule,
  TuiInputDateModule,
  TuiTextfieldControllerModule,
  TuiUnfinishedValidator,
} from '@taiga-ui/legacy';
import { TuiDay, tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';
import { TodoItemInterface } from '@todo-list/data';

@Component({
  selector: 'lib-feature-add-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiButton,
    TuiTextfieldControllerModule,
    TuiUnfinishedValidator,
  ],
  templateUrl: './feature-add-task.component.html',
  styleUrl: './feature-add-task.component.less',
})
export class FeatureAddTaskComponent {
  private readonly fb = inject(FormBuilder);

  @Output() submittedTask = new EventEmitter<TodoItemInterface>();

  taskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    dueDate: [this.getCurrentTuiDay(), [Validators.required]],
  });

  public onSubmit() {
    if (this.taskForm.valid) {
      let taskData = {
        id: this.generateId(),
        ...this.taskForm.value,
        completed: false,
      };

      // Преобразование TuiDay в объект Date
      if (taskData.dueDate instanceof TuiDay) {
        taskData.dueDate = this.convertTuiDayToDate(taskData.dueDate);
      } else {
        // Обработка в случае, если dueDate не является экземпляром TuiDay
        taskData.dueDate = new Date(taskData.dueDate);
      }

      this.submittedTask.emit(taskData);
      tuiMarkControlAsTouchedAndValidate(this.taskForm);

      this.taskForm.reset();

    } else {
      console.log(`invalid!  ${this.taskForm.invalid}`);
      tuiMarkControlAsTouchedAndValidate(this.taskForm);
    }

  }

  private generateId() {
    // Генерируем случайный ID
    return Math.floor(Math.random() * 1000000);
  }

  private getCurrentTuiDay(): TuiDay {
    const date = new Date();
    // В Taiga UI месяцы начинаются с 0, поэтому используется getMonth()
    return new TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private convertTuiDayToDate(date: TuiDay) {
    return new Date(date.year, date.month, date.day);
  }
}
