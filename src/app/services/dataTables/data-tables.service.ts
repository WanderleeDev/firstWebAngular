import { Injectable } from '@angular/core';
import { IRowTable } from './IRowTable.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  private tableGroup: Array<IRowTable[]> = []
  private tableGroupSubject = new BehaviorSubject<Array<IRowTable[]>>( [[]] )
  private tableSubject = new BehaviorSubject<IRowTable[]>( [] );
  private rowTable: IRowTable = {
    date: '',
    flag: '',
    data: '',
    item: '',
    price: ''
  }


  public getRowBase(): IRowTable {
    return this.rowTable
  }

  public getTableObservable(): Observable<IRowTable[]> {
    return this.tableSubject.asObservable();
  }

  public getTableGroup(): Array<IRowTable[]> {
    return this.tableGroup
  }

  public saveRow(row: IRowTable) {
    const currentTable = this.tableSubject.value; // Obtener el valor actual.
    currentTable.push(row); // Agregar la fila al valor actual.
    this.tableSubject.next(currentTable); // Notificar el cambio a los suscriptores.
    console.log(currentTable);
  }

  public clearTable() {
    this.tableSubject.next([])
  }

  public saveTableGroup(table: IRowTable[]) {
    const currentTableGroup = this.tableGroupSubject.value
    currentTableGroup.push(table)
    this.tableGroupSubject.next(currentTableGroup)
    console.log(this.tableGroupSubject.value);
    this.clearTable()
  }
}
