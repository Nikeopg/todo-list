import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIteimInterface } from '@todo-list/data';
import { changeDateSeparator } from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
  selector: 'lib-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent  {

  @Input() todo?: TodoIteimInterface;

  public checkTodoStatus(todo: TodoIteimInterface | undefined): boolean {
    console.log(`todo: ${todo}`)
    if (todo === undefined) {
      return false;
    }
    return typeof todo?.completed === 'boolean';

  }
}
