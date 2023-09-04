import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { IFormValidate } from 'src/app/services/resgistrationData/IFormValidate.interface';
import { RegistrationDataService } from 'src/app/services/resgistrationData/registration-data.service';

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent implements OnInit{
  listInput = ['item', 'date', 'flag', 'data', 'price'];
  formData!: FormGroup<IFormValidate>

  constructor(
    private registrationDataService: RegistrationDataService
  ) {}

  ngOnInit(): void {
    this.formData = this.registrationDataService.getFormValidate()
  }

  public getValidForm() {
    this.registrationDataService.validateForm(this.formData)
  }
}
