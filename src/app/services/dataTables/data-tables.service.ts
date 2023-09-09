import { Injectable } from '@angular/core';
import { IBoardGroup, IRow, IRowBoard } from './IRowBoard.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { IdGeneratorService } from '../idGenerator/id-generator.service';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  private boardGroupSubject = new BehaviorSubject<IBoardGroup[]>([])
  private boardSubject = new BehaviorSubject<IRowBoard[]>([]);

  constructor(
    private idGenerator: IdGeneratorService
  ){}


  public getBoardObservable(): Observable<IRowBoard[]> {
    return this.boardSubject.asObservable();
  }

  public getBoardGroupObservable(): Observable<IBoardGroup[]> {
    return this.boardGroupSubject.asObservable();
  }

  public saveRow(row: IRow, color:string) {
    const currentBoard = this.boardSubject.value; // Obtener el valor actual.
    const rowDta: IRowBoard = {
      id: `row-${this.idGenerator.generateRandomId()}`,
      color: color ?? '#000',
      ...row
    }

    currentBoard.push(rowDta);
    this.boardSubject.next(currentBoard);
  }

  public saveTableGroup(boardData: IRowBoard[], title: string| null) {
    const currentBoardGroup = this.boardGroupSubject.value
    const board: IBoardGroup = {
      id: `board-${this.idGenerator.generateRandomId()}`,
      title: title,
      boardDta: boardData
    }

    currentBoardGroup.push(board)
    this.boardGroupSubject.next(currentBoardGroup)
    this.clearTable()
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

  public deleteRowV2(idRow:string, idBoard:string) {
    //  obtiene el valor las tablas
    const preValue = this.boardGroupSubject.value;
    //  Busca el indice de la tabla a editar
    const boardIndex  = preValue.findIndex(board => board.id === idBoard)

    //  si existe el indice ejecuta
    if (boardIndex !== -1) {
      //  Identifica la tabla a editar
      const newBoard = preValue[boardIndex]
      //  Asigna el nuevo valor filtrando la tabla eliminando el row identificado por idRow
      newBoard.boardDta = newBoard.boardDta.filter(row => row.id !== idRow)

      //  ? Si el array esta vació lo elimina con el método deleteBoard
      //  : De lo contrario actualiza el valor previo envía el valor a los observadores
      newBoard.boardDta.length === 0
        ? this.deleteBoard(newBoard.id)
        : this.boardGroupSubject.next([...preValue])
    }
  }
}
