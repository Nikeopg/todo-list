import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataServiceService } from '../../../../shared/data/src/lib/data/services/mock-data-service/mock-data-service.service';
import { TuiButton, TuiOption } from '@taiga-ui/core';
import { TuiButtonClose } from '@taiga-ui/kit';

@Component({
  selector: 'lib-feature-delete-task',
  standalone: true,
  imports: [CommonModule, TuiButton, TuiButtonClose, TuiOption],
  templateUrl: './feature-delete-task.component.html',
  styleUrl: './feature-delete-task.component.css',
})
export class FeatureDeleteTaskComponent {
  private readonly mockService = inject(MockDataServiceService);

  @Input() taskId?: number;
  @Output() deleteRequest = new EventEmitter<number>();

  deleteTask() {
    if (this.taskId) {
      this.deleteRequest.emit(this.taskId);
    }
  }
}
