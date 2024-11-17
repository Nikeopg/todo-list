import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBadgeNotification } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, TuiHeader, TuiBadgeNotification, TuiButton],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
