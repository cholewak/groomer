import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MenuComponent} from "../menu/menu.component";

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
    imports: [CommonModule, MenuComponent]
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
