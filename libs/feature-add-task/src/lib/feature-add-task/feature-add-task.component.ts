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
import { TuiDay } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';
import { TodoIteimInterface } from '@todo-list/data';

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

  @Output() submittedTask = new EventEmitter<TodoIteimInterface>();

  taskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    dueDate: [new TuiDay(2024, 10, 20)],
    completed: [false],
  });

  public onSubmit() {
    if (this.taskForm.valid) {
      let taskData = {
        id: this.generateId(),
        ...this.taskForm.value
      };

      // Преобразование TuiDay в объект Date
      if (taskData.dueDate instanceof TuiDay) {
        taskData.dueDate = this.convertTuiDayToDate(taskData.dueDate);
      } else {
        // Обработка в случае, если dueDate не является экземпляром TuiDay
        taskData.dueDate = new Date(taskData.dueDate);
      }

      this.submittedTask.emit(taskData);
      this.taskForm.reset()

    }

  }

  private generateId() {
    // Генерируем случайный ID
    return Math.floor(Math.random() * 1000000);
  }

  private convertTuiDayToDate(date: TuiDay) {
    return new Date(date.year, date.month, date.day);
  }
}
