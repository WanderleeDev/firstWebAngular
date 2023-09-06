import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoPickerComponent } from './colo-picker.component';

describe('ColoPickerComponent', () => {
  let component: ColoPickerComponent;
  let fixture: ComponentFixture<ColoPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoPickerComponent]
    });
    fixture = TestBed.createComponent(ColoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
