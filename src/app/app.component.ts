import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeadComponent} from "./head/head.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./services-page/services-page.component";

@Component({
    selector: 'app-root',
    imports: [CommonModule, HeadComponent, HomePageComponent, PageNotFoundComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groomer';
}
