import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRegisterComponent } from './main-register.component';

describe('MainRegisterComponent', () => {
  let component: MainRegisterComponent;
  let fixture: ComponentFixture<MainRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainRegisterComponent]
    });
    fixture = TestBed.createComponent(MainRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
