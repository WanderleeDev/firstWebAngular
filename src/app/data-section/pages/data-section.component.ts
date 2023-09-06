import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
import { IBoardGroup } from 'src/app/services/dataTables/IRowTable.interface';

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.scss']
})
export class DataSectionComponent implements OnInit, OnDestroy{
  groupTables: IBoardGroup[]= []
  private groupTableSub!: Subscription;

  constructor(
    private  dataTablesService: DataTablesService
  ) {}

  ngOnInit(): void {
    this.groupTableSub = this.dataTablesService.getBoardGroupObservable()
      .subscribe((res) => {
        this.groupTables = res
      })
  }

  ngOnDestroy(): void {
    this.groupTableSub.unsubscribe()
    console.log(`fin suscripción`);
  }
}
