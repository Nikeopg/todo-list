import { Component, inject } from '@angular/core';
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

  taskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    dueDate: [new TuiDay(2024, 10, 20)],
    completed: [false],
  });

  generateId() {
    // Генерируем случайный ID
    return Math.floor(Math.random() * 1000000);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData = {
        // Определяем ID при отправке
        id: this.generateId(),
        ...this.taskForm.value
      };
      console.log(taskData);
      // Здесь мы можем обрабатывать данные формы, например, отправлять их на сервер
    }
  }
}
