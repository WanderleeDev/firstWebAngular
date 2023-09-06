import { Injectable } from '@angular/core';
import { IBoardGroup, IRow, IRowBoard } from './IRowBoard.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  private boardGroupSubject = new BehaviorSubject<IBoardGroup[]>([])
  private boardSubject = new BehaviorSubject<IRowBoard[]>([]);
  private rowDta: IRow = {
    date: '',
    flag: '',
    data: '',
    item: '',
    price: ''
  }


  public getRowBase(): IRow {
    return this.rowDta
  }

  public getBoardObservable(): Observable<IRowBoard[]> {
    return this.boardSubject.asObservable();
  }

  public getBoardGroupObservable(): Observable<IBoardGroup[]> {
    return this.boardGroupSubject.asObservable();
  }

  public saveRow(row: IRow, color:string) {
    const currentBoard = this.boardSubject.value; // Obtener el valor actual.
    const rowDta: IRowBoard = {
      id: `row-${crypto.randomUUID()}`,
      color: color ?? '#000',
      ...row
    }

    currentBoard.push(rowDta); // Agregar la fila al valor actual.
    this.boardSubject.next(currentBoard); // Notificar el cambio a los suscriptores.
    console.log(rowDta);
  }

  public saveTableGroup(boardData: IRowBoard[]) {
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
    this.boardSubject.next([])
  }
}
