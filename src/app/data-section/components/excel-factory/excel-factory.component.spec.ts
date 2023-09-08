import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFactoryComponent } from './excel-factory.component';

describe('ExcelFactoryComponent', () => {
  let component: ExcelFactoryComponent;
  let fixture: ComponentFixture<ExcelFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelFactoryComponent]
    });
    fixture = TestBed.createComponent(ExcelFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
