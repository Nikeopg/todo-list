import { Route } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';

export const todosListRoutes: Route[] = [
  { path: '', component: TodosListComponent },
];
