import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRabatComponent } from './about-rabat.component';

describe('AboutRabatComponent', () => {
  let component: AboutRabatComponent;
  let fixture: ComponentFixture<AboutRabatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutRabatComponent]
    });
    fixture = TestBed.createComponent(AboutRabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
