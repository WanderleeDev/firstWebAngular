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
    this.boardSub.unsubscribe()
  }
}
