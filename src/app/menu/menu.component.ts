import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BurgerComponent} from "../burger/burger.component";

export interface PageList {
  name: string,
  link: string,
}
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, BurgerComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  toggleOpen() {
    this.open = !this.open;
  }
  open = false;
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
