import { TestBed } from '@angular/core/testing';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModuleModule} from "./app-routing-module/app-routing-module.module";

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomePageComponent,
        ContactPageComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModuleModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'groomer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('groomer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular Router App');
  });
});
