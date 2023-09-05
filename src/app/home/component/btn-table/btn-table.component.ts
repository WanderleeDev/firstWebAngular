import { Component, Input } from '@angular/core';
import { IRowTable } from 'src/app/services/dataTables/IRowTable.interface';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';

@Component({
  selector: 'app-btn-table',
  templateUrl: './btn-table.component.html',
  styleUrls: ['./btn-table.component.scss']
})
export class BtnTableComponent {
  @Input() dataTable: IRowTable[] = []

  constructor (
    private dataTablesService: DataTablesService
  ) {}

  public clearDataTable() {
    this.dataTablesService.clearTable()
  }
  public saveDataTable(table:IRowTable[]) {
    this.dataTablesService.saveTableGroup(table)
  }
}
