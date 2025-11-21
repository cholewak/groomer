import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    imports: [CommonModule]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(link: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  scrollToServices(): void {
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      const headerOffset = 120;
      const elementPosition = servicesElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

}
