import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { IFormValidate } from 'src/app/services/resgistrationData/IFormValidate.interface';
import { Subscription } from 'rxjs';
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
  formData!: FormGroup<IFormValidate>
  list: IRowTable[] = [] //recibir el observable
  listInput!: IRowTable;
  private dataTableSub!: Subscription;

  constructor(
    private registrationDataService: RegistrationDataService,
    private dataTablesService: DataTablesService
  ) {}

  ngOnInit(): void {
    this.formData = this.registrationDataService.getFormValidate()
    this.listInput = this.dataTablesService.getRowBase()
    //  Subscription
    this.dataTableSub = this.dataTablesService.getTableObservable()
      .subscribe((res) => {
        this.list = res
      })
  }

  public getValidForm() {
    const dataRow = this.registrationDataService.validateForm(this.formData)
    this.dataTablesService.saveRow(dataRow)
    console.log(this.list);

  }
}