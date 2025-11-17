import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeadComponent} from "./head/head.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ServicesPageComponent} from "./services-page/services-page.component";
import {GalleryWidgetComponent} from "./gallery-widget/gallery-widget.component";
import {FacebookPostsComponent} from "./facebook-posts/facebook-posts.component";
import {GoogleReviewsComponent} from "./google-reviews/google-reviews.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
    selector: 'app-root',
    imports: [
        CommonModule, 
        HeadComponent, 
        HomePageComponent, 
        ServicesPageComponent,
        GalleryWidgetComponent,
        FacebookPostsComponent,
        GoogleReviewsComponent,
        ContactPageComponent,
        FooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groomer';
}
