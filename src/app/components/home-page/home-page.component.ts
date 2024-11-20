import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from '@todo-list/todos-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, TodosListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less',
})
export class HomePageComponent {}
