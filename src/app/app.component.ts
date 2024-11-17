import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

@Component({
  standalone: true,
  imports: [RouterModule, TuiRoot, HomePageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'todo-list';
}
