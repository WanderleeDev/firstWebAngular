import { Injectable } from '@angular/core';
import { IRowTable } from './IRowTable.interface';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  private tableGroup: Array<IRowTable[]> = []
  private table: IRowTable[] = []
  private rowTable: IRowTable = {
    item: '',
    date: '',
    flag: '',
    data: '',
    price: ''
  }

  public getRowBase(): IRowTable {
    return this.rowTable
  }
  public getTable(): IRowTable[] {
    return this.table
  }
  public getTableGroup(): Array<IRowTable[]> {
    return this.tableGroup
  }
}
