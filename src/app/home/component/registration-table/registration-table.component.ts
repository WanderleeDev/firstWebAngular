import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
// services
import { RegistrationDataService } from 'src/app/services/resgistrationData/registration-data.service';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
// interface
import { IFormValidate } from 'src/app/services/resgistrationData/IFormValidate.interface';

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent implements OnInit{
  formData!: FormGroup<IFormValidate>;
  colorRow!:string;
  formInputs!:string[];

  constructor(
    private registrationDataService: RegistrationDataService,
    private dataTablesService: DataTablesService
    ) {}

  public ngOnInit(): void {
    this.formData = this.registrationDataService.getFormValidate()
    this.formInputs = Object.keys(this.formData.controls)
    console.log(this.formData);

  }

  public getColor(color: string) {
    this.colorRow = color
  }

  public getValidForm(color: string) {
    const dataRow = this.registrationDataService.validateForm(this.formData)
    this.dataTablesService.saveRow(dataRow, color)
  }
}
