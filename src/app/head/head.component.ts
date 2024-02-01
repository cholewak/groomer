import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-head',
  standalone: true,
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
  imports: [CommonModule]
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
