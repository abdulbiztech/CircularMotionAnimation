import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularMotionComponent } from './circular-motion.component';

describe('CircularMotionComponent', () => {
  let component: CircularMotionComponent;
  let fixture: ComponentFixture<CircularMotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularMotionComponent]
    });
    fixture = TestBed.createComponent(CircularMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
