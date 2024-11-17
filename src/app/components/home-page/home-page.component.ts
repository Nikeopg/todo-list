import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBadgeNotification } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';
import { HeaderComponent } from '@todo-list/header';
import { TodosListComponent } from '@todo-list/todos-list';
import { TodoItemComponent } from '@todo-list/todo-item';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TuiHeader,
    TuiBadgeNotification,
    TuiButton,
    TodosListComponent,
    TodoItemComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less',
})
export class HomePageComponent {}
