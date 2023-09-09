import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
//  interfaces
import { IRowBoard } from 'src/app/services/dataTables/IRowBoard.interface';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent  implements OnInit, OnDestroy {
  @Input() hasSubscription = true;
  @Input() titleBoard?: string | null;
  @Input() idBoard: string | undefined = undefined;
  @Input() dataBoard: IRowBoard[] = []
  private boardSub!: Subscription;

  constructor(
    private dataTablesService: DataTablesService
  ){}

  ngOnInit(): void {
    this.hasSubscription && (
      this.boardSub = this.dataTablesService.getBoardObservable()
      .subscribe((res) => {
        this.dataBoard = res
      }))
  }

  ngOnDestroy(): void {
    this.hasSubscription && (
      this.boardSub.unsubscribe()
    )
  }

  public deleteRow(idRow: string, idTable: string | undefined) {
    if (this.hasSubscription) {
      const newRow: IRowBoard[] =  this.dataBoard.filter((row) => row.id !== idRow)
      this.dataTablesService.editBoard(newRow)
    }

    if(!this.hasSubscription && idTable !== undefined) {
      this.dataTablesService.deleteRowV2(idRow, idTable)
    }
  }
}
