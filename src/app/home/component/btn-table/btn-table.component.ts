import { Component, Input } from '@angular/core';
import { IRowBoard } from 'src/app/services/dataTables/IRowBoard.interface';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';

@Component({
  selector: 'app-btn-table',
  templateUrl: './btn-table.component.html',
  styleUrls: ['./btn-table.component.scss']
})
export class BtnTableComponent {
  @Input() dataBoard: IRowBoard[] = []

  constructor (
    private dataTablesService: DataTablesService
  ) {}

  public clearDataBoard() {
    this.dataTablesService.clearTable()
  }
  public saveDataBoard(table:IRowBoard[]) {
    const titleBoard: string | null = prompt('Define a name for your table')
    this.dataTablesService.saveTableGroup(table, titleBoard)
  }
}
