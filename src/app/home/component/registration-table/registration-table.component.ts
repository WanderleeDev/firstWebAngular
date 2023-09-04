import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { IFormValidate } from 'src/app/services/resgistrationData/IFormValidate.interface';
// services
import { RegistrationDataService } from 'src/app/services/resgistrationData/registration-data.service';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
// interface
import { IRowTable } from 'src/app/services/dataTables/IRowTable.interface';

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent implements OnInit{
  listInput!: IRowTable;
  formData!: FormGroup<IFormValidate>
  list!: IRowTable

  constructor(
    private registrationDataService: RegistrationDataService,
    private dataTablesService: DataTablesService
  ) {}

  ngOnInit(): void {
    this.formData = this.registrationDataService.getFormValidate()
    this.listInput = this.dataTablesService.getRowBase()
  }

  public getValidForm() {
    this.registrationDataService.validateForm(this.formData)
  }
}
