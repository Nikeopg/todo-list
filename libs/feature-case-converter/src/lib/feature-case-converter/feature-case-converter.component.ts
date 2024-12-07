import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAddTaskComponent } from '@todo-list/feature-add-task';
import { TodoItemComponent } from '@todo-list/todo-item';
import { TuiInputModule } from '@taiga-ui/legacy';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'lib-feature-case-converter',
  standalone: true,
  imports: [
    CommonModule,
    FeatureAddTaskComponent,
    TodoItemComponent,
    TuiInputModule,
    TuiButton,
  ],
  templateUrl: './feature-case-converter.component.html',
  styleUrl: './feature-case-converter.component.less',
})
export class FeatureCaseConverterComponent {}
