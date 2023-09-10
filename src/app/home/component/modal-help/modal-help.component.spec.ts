import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelpComponent } from './modal-help.component';

describe('ModalHelpComponent', () => {
  let component: ModalHelpComponent;
  let fixture: ComponentFixture<ModalHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHelpComponent]
    });
    fixture = TestBed.createComponent(ModalHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
