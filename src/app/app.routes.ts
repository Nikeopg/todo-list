import { Route } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FeatureCaseConverterComponent } from '@todo-list/feature-case-converter';
import { TodosListComponent } from '@todo-list/todos-list';

// export const appRoutes: Route[] = [
//   { path: 'home', component: HomePageComponent },
// ];


export const appRoutes: Route[] = [
  { path: '', component: HomePageComponent }, // корень открывает HomePageComponent
  { path: 'home', component: TodosListComponent },
  { path: 'case-converter', component: FeatureCaseConverterComponent },
];
