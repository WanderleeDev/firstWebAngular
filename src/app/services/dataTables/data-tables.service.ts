import { Injectable } from '@angular/core';
import { IBoardGroup, IRow, IRowTable } from './IRowTable.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  //private tableGroup: Array<IRow[]> = []
  private boardGroupSubject = new BehaviorSubject<IBoardGroup[]>([])
  private tableSubject = new BehaviorSubject<IRowTable[]>([]);
  private rowTable: IRow = {
    date: '',
    flag: '',
    data: '',
    item: '',
    price: ''
  }


  public getRowBase(): IRow {
    return this.rowTable
  }

  public getTableObservable(): Observable<IRowTable[]> {
    return this.tableSubject.asObservable();
  }

  public getBoardGroupObservable(): Observable<IBoardGroup[]> {
    return this.boardGroupSubject.asObservable();
  }

  public saveRow(row: IRow, color:string) {
    const currentTable = this.tableSubject.value; // Obtener el valor actual.
    const rowTable: IRowTable = {
      id: `row-${crypto.randomUUID()}`,
      color: color ?? '#000',
      ...row
    }

    currentTable.push(rowTable); // Agregar la fila al valor actual.
    this.tableSubject.next(currentTable); // Notificar el cambio a los suscriptores.
    console.log(rowTable);
  }

  public saveTableGroup(boardData: IRowTable[]) {
    const currentBoardGroup = this.boardGroupSubject.value
    const board: IBoardGroup = {
      id: `board-${crypto.randomUUID()}`,
      boardDta: boardData
    }
    currentBoardGroup.push(board)
    this.boardGroupSubject.next(currentBoardGroup)
    console.log(this.boardGroupSubject.value);
    this.clearTable()
  }

  public clearTable() {
    this.tableSubject.next([])
  }
}
