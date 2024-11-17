import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIteimInterface } from '@todo-list/data';
import { changeDateSeparator } from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
  selector: 'lib-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.todo);
  }
  @Input() todo?: TodoIteimInterface;
}
