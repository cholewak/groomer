import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-services-page',
  standalone: true,
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  imports: [CommonModule]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
