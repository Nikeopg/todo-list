import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBadgeNotification, TuiChevron } from '@taiga-ui/kit';
import { TuiButton, TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    TuiHeader,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive,
    TuiButton,
    TuiChevron,

    TuiIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  protected readonly groups = [
    {
      label: 'Components',
      items: [
        {
          label: 'todo-list',
          routerLink: '/todo-list',
        },
        {
          label: 'case-converter',
          routerLink: '/case-converter',
        },
      ],
    },
  ];
}
