import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryWidgetComponent } from './gallery-widget.component';

describe('GallerPageComponent', () => {
  let component: GalleryWidgetComponent;
  let fixture: ComponentFixture<GalleryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
