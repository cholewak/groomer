import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BurgerComponent} from "../burger/burger.component";

export interface PageList {
  name: string,
  link: string,
}
@Component({
    selector: 'app-menu',
    imports: [CommonModule, BurgerComponent],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  toggleOpen() {
    this.open = !this.open;
  }

  scrollToSection(link: string, event: Event): void {
    event.preventDefault();
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.open = false; // Close mobile menu after clicking
      }
    }
  }

  public open = false;
  public menuList: Array<PageList> = [
    {
      name: 'Strona główna',
      link: '#home'
    },
    {
      name: 'Usługi',
      link: '#services'
    },
    {
      name: 'Galeria',
      link: '#gallery'
    },
    {
      name: 'Kontakt',
      link: '#contact'
    }];
}
