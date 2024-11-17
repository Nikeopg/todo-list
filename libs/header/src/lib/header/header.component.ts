import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBadgeNotification } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, TuiHeader, TuiBadgeNotification, TuiButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {}
