import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTableComponent } from './btn-table.component';

describe('BtnTableComponent', () => {
  let component: BtnTableComponent;
  let fixture: ComponentFixture<BtnTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnTableComponent]
    });
    fixture = TestBed.createComponent(BtnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
