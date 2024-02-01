import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-galler-page',
  standalone: true,
  templateUrl: './gallery-widget.component.html',
  styleUrls: ['./gallery-widget.component.scss'],
  imports: [CommonModule]
})
export class GalleryWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
