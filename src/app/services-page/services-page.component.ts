import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss'],
    imports: [CommonModule]
})
export class ServicesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
