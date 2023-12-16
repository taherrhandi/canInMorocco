import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIfacComponent } from './about-ifac.component';

describe('AboutIfacComponent', () => {
  let component: AboutIfacComponent;
  let fixture: ComponentFixture<AboutIfacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutIfacComponent]
    });
    fixture = TestBed.createComponent(AboutIfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
