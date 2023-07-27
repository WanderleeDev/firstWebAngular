import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkZoneComponentComponent } from './work-zone-component.component';

describe('WorkZoneComponentComponent', () => {
  let component: WorkZoneComponentComponent;
  let fixture: ComponentFixture<WorkZoneComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkZoneComponentComponent]
    });
    fixture = TestBed.createComponent(WorkZoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
