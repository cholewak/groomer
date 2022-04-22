import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerPageComponent } from './galler-page.component';

describe('GallerPageComponent', () => {
  let component: GallerPageComponent;
  let fixture: ComponentFixture<GallerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
