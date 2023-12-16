import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelToursComponent } from './travel-tours.component';

describe('TravelToursComponent', () => {
  let component: TravelToursComponent;
  let fixture: ComponentFixture<TravelToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelToursComponent]
    });
    fixture = TestBed.createComponent(TravelToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
