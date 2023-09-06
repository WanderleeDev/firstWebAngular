import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
import { IBoardGroup } from 'src/app/services/dataTables/IRowBoard.interface';

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.scss']
})
export class DataSectionComponent implements OnInit, OnDestroy{
  boardGroup: IBoardGroup[]= []
  private boardGroupSub!: Subscription;

  constructor(
    private  dataTablesService: DataTablesService
  ) {}

  ngOnInit(): void {
    this.boardGroupSub = this.dataTablesService.getBoardGroupObservable()
      .subscribe((res) => {
        this.boardGroup = res
      })
  }

  ngOnDestroy(): void {
    this.boardGroupSub.unsubscribe()
    console.log(`fin suscripción`);
  }
}
