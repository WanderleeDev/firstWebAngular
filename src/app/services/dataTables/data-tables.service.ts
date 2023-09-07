import { Injectable } from '@angular/core';
import { IBoardGroup, IRow, IRowBoard } from './IRowBoard.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  private boardGroupSubject = new BehaviorSubject<IBoardGroup[]>([])
  private boardSubject = new BehaviorSubject<IRowBoard[]>([]);


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

    currentBoard.push(rowDta);
    this.boardSubject.next(currentBoard);
  }

  public saveTableGroup(boardData: IRowBoard[], title: string| null) {
    const currentBoardGroup = this.boardGroupSubject.value
    const board: IBoardGroup = {
      id: `board-${crypto.randomUUID()}`,
      title: title,
      boardDta: boardData
    }

    currentBoardGroup.push(board)
    this.boardGroupSubject.next(currentBoardGroup)
    this.clearTable()
    console.log(this.boardGroupSubject.value);

  }

  public editBoard(newBoard: IRowBoard[]) {
    this.boardSubject.next(newBoard)
  }

  public deleteBoard(id: string) {
    const filteredTables = this.boardGroupSubject.value.filter((board) => {
      return board.id !== id
    })
    this.boardGroupSubject.next(filteredTables)
  }

  public clearTable() {
    this.boardSubject.next([])
  }
}
