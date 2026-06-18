import { Component, OnInit, HostListener } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MenuComponent} from "../menu/menu.component";

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
    imports: [CommonModule, MenuComponent]
})
export class HeadComponent implements OnInit {
  isScrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
  }
}
