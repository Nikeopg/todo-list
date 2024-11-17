import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.less',
})
export class TodosListComponent {}
