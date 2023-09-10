import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
// services
import { RegistrationDataService } from 'src/app/services/resgistrationData/registration-data.service';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
// interface
import { IFormValidate } from 'src/app/services/resgistrationData/IFormValidate.interface';
import { IErrorMessages } from 'src/app/services/resgistrationData/IErrorMsn.interface';

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent implements OnInit{
  formData!: FormGroup<IFormValidate>;
  colorRow!:string;
  formInputs!:string[];
  msnErrors!: IErrorMessages;
  isViewModal = false;

  constructor(
    private registrationDataService: RegistrationDataService,
    private dataTablesService: DataTablesService
    ) {}

  public ngOnInit(): void {
    this.formData = this.registrationDataService.getFormValidate()
    this.formInputs = Object.keys(this.formData.controls)
    this.msnErrors = this.registrationDataService.getMsnErrors()
  }

  public getColor(color: string) {
    this.colorRow = color
  }

  public getValidForm(color: string) {
    const dataRow = this.registrationDataService.validateForm(this.formData)
    this.dataTablesService.saveRow(dataRow, color)
  }

  public getValidInput(input: string): boolean {
    return this.registrationDataService.getValid(input)
  }

  public getStateInp(input: string): FormControl {
    return this.registrationDataService.getInputState(input)
  }

  public showModal() {
    this.isViewModal = !this.isViewModal
  }
}
