import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {GalleryWidgetComponent} from "./gallery-widget/gallery-widget.component";
import {HeadComponent} from "./head/head.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./services-page/services-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactPageComponent, GalleryWidgetComponent, HeadComponent, HomePageComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groomer';
}
