import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { DataTablesService } from 'src/app/services/dataTables/data-tables.service';
//  interfaces
import { IRowTable } from 'src/app/services/dataTables/IRowTable.interface';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent  implements OnInit, OnDestroy {
  dataTable: IRowTable[] = []
  private tableSub!: Subscription;

  constructor(
    private dataTablesService: DataTablesService
  ){}

  ngOnInit(): void {
    this.tableSub = this.dataTablesService.getTableObservable()
      .subscribe((res) => {
        this.dataTable = res
      })
  }
  ngOnDestroy(): void {
    this.tableSub.unsubscribe()
  }
}
