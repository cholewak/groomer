import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css'],
    imports: [CommonModule]
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
