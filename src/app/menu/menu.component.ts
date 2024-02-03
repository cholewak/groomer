import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PageList {
  name: string,
  link: string,
}
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public manuList: Array<PageList> = [
    {
      name: 'Strona główna',
      link: ''
    },
    {
      name: 'Usługi',
      link: ''
    },
    {
      name: 'Galleria',
      link: ''
    },
    {
      name: 'Kontakt',
      link: ''
    }];
}
